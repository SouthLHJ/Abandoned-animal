/*
    유기동물 당 표시화면 
*/
import { useEffect } from "react";
import "./item.css"

function Item({data,onSelected,selected}) { //분해할당!!
    let s = data == selected ? true : false;        
    useEffect(()=>{
        if(s){
            var location = document.querySelector(".select").offsetTop;
            console.log(location);
            document.querySelector("#listArea").scrollTo({top:location-123, behavior:'smooth'});
            // document.querySelector("#listArea").scrollTop = location-123;   
        }
    })
    //
    return ( 
        <div id="itemArea" className={s ? "select" : "unselect"} onClick={()=>{onSelected(data)}}>
            <img className="thumbnail" src={data.filename} alt={"thumbnail"}/>
            <div id="info">
                <p>
                    {data.kindCd} ({data.colorCd})
                </p>
                <p>
                    발견장소 : {data.happenPlace}
                </p>
            </div>
            
        </div>
    );
}

export default Item;