/*
    상위에서 데이터 받아서 리스트 출력하는 컴포넌트
*/
import "./list.css"

import Item from "../item/item";

function List(props) {
    return ( 
        <div id="listArea">
            {props.pets.map(pet=>{
                return (<Item key={pet.desertionNo} data={pet} onSelected={props.onSelected} selected={props.selected}/>)
            })}
        </div>
     );
}

export default List;