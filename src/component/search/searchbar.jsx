import { useRef } from "react";
import "./searchbar.css"

function SearchBar({onSearch,cityCode}) {
    const bgnde = useRef();
    const egnde = useRef();
    const upr = useRef();
    // console.log(cityCode)

    function SearchHandle(event){
        event.preventDefault();
        // console.log("!!", upr.current.value)
        onSearch(
            bgnde.current.value.replaceAll("-",""),
            egnde.current.value.replaceAll("-",""),
            upr.current.value
        )
    }

    return ( 
        <div>
            <form className="search-form" onSubmit={SearchHandle}>
                <input type="date" ref={bgnde}/>~
                <input type="date" ref={egnde}/>
                <select className="searchCityCode" ref={upr}>
                    <option value={"전체"}>전체</option>
                    {cityCode.map(code=>{
                       return <option key={code.orgCd} value={code.orgCd}>{code.orgdownNm}</option>
                    })}
                </select>
                <button className="srchBtn" type="submit"><i className="fa fa-search" aria-hidden="true"></i>   검색</button>
            </form>

        </div>
     );
}

export default SearchBar;