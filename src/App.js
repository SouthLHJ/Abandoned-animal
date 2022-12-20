import { useEffect, useState } from 'react';
import './App.css';
import Detail from './component/detail/detail';
import List from './component/list/list';
import Loading from './component/load/loading';
import SearchBar from './component/search/searchbar';

function App() {
  //페이지 타이틀 설정하는 방법
  document.title= "유기동물 조회 서비스";
  const key = process.env.REACT_APP_API_KEY;

  //Hook State 설 정 (비휘발성 데이터)
  const [loading, setLoading] = useState();
  const [pets,setPets] = useState([]);
  const [selected,setSelected] = useState();
  const [cityCode,setCityCode] = useState([]);
  const [page, setPage] = useState();

  // side effect // 최초 랜더링에서만 발생하게 설정 (최초 데이터 수집)
  useEffect(()=>{
    setLoading(true);
    // AJAX 작동 (OIS? 찾아봐보기)
    //유기동물 정보 얻어오기
    fetch(`http://apis.data.go.kr/1543061/abandonmentPublicSrvc/abandonmentPublic?serviceKey=${key}&_type=json&numOfRows=100`)
      .then(res=> res.json())
      .then(json =>{
        // console.log(json.response.body.items.item);
        setPets(json.response.body.items.item);
        setLoading(false);
      })
      .catch(err=>{
        console.log(err);
      })

    //시도 코드 값을 얻어와서 SearchBar로 데이터를 받아오기
    fetch(`http://apis.data.go.kr/1543061/abandonmentPublicSrvc/sido?numOfRows=20&pageNo=1&serviceKey=${key}&_type=json`)
      .then(res=> res.json())
      .then(json=>{
        setCityCode(json.response.body.items.item);
        
      })
      .catch(err=>{
        console.log(err);
      })
  },[]) 

  // 함수
  //선택함수
  const handSelected = (data)=>{
    if(selected == data){
      setSelected(null);
      document.querySelector("#listArea").scrollTop = 0;
    }else{
      setSelected(data);
    }
  }
  //검색함수
  const handleSearch = (bgnde,endde,upr_cd)=>{
    const upr = upr_cd == "전체" ? `` : `&upr_cd=${upr_cd}`
    // console.log(bgnde,endde);
    setLoading(true);
    fetch(`http://apis.data.go.kr/1543061/abandonmentPublicSrvc/abandonmentPublic?serviceKey=${key}&_type=json&numOfRows=100&bgnde=${bgnde??"19000101"}&endde=${endde}${upr}`)
      .then(res=> res.json())
      .then(json =>{
        // console.log(json)
        // console.log(json.response.body.items.item)
        setPets(json.response.body.items.item);
        setSelected(null);
        document.querySelector("#listArea").scrollTop = 0;

        setLoading(false)
      })
      .catch(err=>{
        console.log(err);
      })
  }




  return (
    <div className='App'>
      <div id='title'>
        <h3><i class="fa fa-paw" aria-hidden="true"></i> 유기동물 조회 </h3>
      </div>
      <SearchBar onSearch={handleSearch} cityCode={cityCode}/>
      {loading ? <Loading/> : <></>}
      <div id='contain'>
        {/* {selected && <Detail target={selected}/>}  동일하게 작동한다. (작동이 하나만 있을 때 쓰면 유용)*/}
        {selected ? <Detail target={selected}/> : <></>}
        <List pets={pets} onSelected={handSelected} selected={selected}/>
      </div>
    </div>
  );
}

export default App;


/*
  추가할 기능
  검색 옵션에 시도 선택을 가능하게 (sendMessage : upr_cd)]

  시도코드는 오픈 API 도큐먼트에 1번 기능으로 소개가 되고 있음.
*/