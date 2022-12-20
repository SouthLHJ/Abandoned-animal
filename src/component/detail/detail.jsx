import "./detail.css"

function Detail({target}) {
    return (
        <div id="detailArea">
            <img className="detailThumbnail" src={target.popfile} alt={"detailThumbnail"}/>

            <table>
                <tbody>
                    <tr>
                        <td className="head">유기번호</td>
                        <td>{target.desertionNo}</td>
                        <td className="head">접수일</td>
                        <td>{target.happenDt}</td>
                    </tr>
                    <tr>
                        <td className="head">품종</td>
                        <td>{target.kindCd}</td>
                        <td className="head">색상</td>
                        <td>{target.colorCd}</td>
                    </tr>
                    <tr>
                        <td className="head">성별</td>
                        <td>{target.sexCd}</td>
                        <td className="head">중성화여부</td>
                        <td>{target.neuterYn}</td>
                    </tr>
                    <tr>
                        <td className="head">발견장소</td>
                        <td>{target.happenPlace}</td>
                        <td className="head">상태</td>
                        <td>{target.processState}</td>
                    </tr>
                    <tr>
                        <td className="head">공고시작일</td>
                        <td>{target.noticeSdt}</td>
                        <td className="head">공고종료일</td>
                        <td>{target.noticeEdt}</td>
                    </tr>
                    <tr>
                        <td className="head">특징</td>
                        <td>{target.specialMark}</td>
                        <td className="head">보호소이름</td>
                        <td>{target.careNm}</td>
                    </tr>
                    <tr>
                        <td className="head">보호소전화번호</td>
                        <td>{target.careTel}</td>
                        <td className="head">보호장소</td>
                        <td>{target.careAddr}</td>
                    </tr>
                    <tr>
                        <td className="head">특징</td>
                        <td>{target.specialMark}</td>
                        <td className="head">보호소이름</td>
                        <td>{target.careNm}</td>
                    </tr>

                </tbody>
            </table>
        </div> 
     );
}

export default Detail;