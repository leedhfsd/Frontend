import Seo from "../components/Seo";

export default function Code() {
  return(
    <div>
      <Seo title="코드"/>
      <main className="">
        <article className="">
          <table className="text-md">
            <thead>
              <tr className="border-b-2 border-sky-700">
                <td>코드 구분</td>
                <td>코드 번호</td>
                <td>코드 이름</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>구매방식코드</td>
                <td>01</td>
                <td>카드결제</td>
              </tr>
              <tr>
                <td>구매방식코드</td>
                <td>02</td>
                <td>문화상품권</td>
              </tr>
              <tr className="border-b-2 border-sky-700">
                <td>구매방식코드</td>
                <td>03</td>
                <td>현금결제</td>
              </tr>
              <tr>
                <td>상품분류코드</td>
                <td>01</td>
                <td>냉동식품</td>
              </tr>
              <tr>
                <td>상품분류코드</td>
                <td>02</td>
                <td>생필품</td>
              </tr>
              <tr>
                <td>상품분류코드</td>
                <td>03</td>
                <td>기호식품</td>
              </tr>
              <tr>
                <td>상품분류코드</td>
                <td>04</td>
                <td>아이스크림</td>
              </tr>
              <tr>
                <td>상품분류코드</td>
                <td>05</td>
                <td>음료수</td>
              </tr>
              <tr>
                <td>상품분류코드</td>
                <td>06</td>
                <td>냉장식품</td>
              </tr>
              <tr>
                <td>상품분류코드</td>
                <td>07</td>
                <td>카드상품</td>
              </tr>
              <tr>
                <td>상품분류코드</td>
                <td>08</td>
                <td>과자</td>
              </tr>
              <tr>
                <td>상품분류코드</td>
                <td>09</td>
                <td>지점재량상품</td>
              </tr>
              <tr className="border-b-2 border-sky-700">
                <td>상품분류코드</td>
                <td>10</td>
                <td>로또</td>
              </tr>
              <tr>
                <td>지출코드</td>
                <td>01</td>
                <td>월세</td>
              </tr>
              <tr>
                <td>지출코드</td>
                <td>02</td>
                <td>인건비</td>
              </tr>
              <tr>
                <td>지출코드</td>
                <td>03</td>
                <td>공과금</td>
              </tr>
              <tr>
                <td>지출코드</td>
                <td>04</td>
                <td>발주</td>
              </tr>
              <tr className="border-b-2 border-sky-700">
                <td>지출코드</td>
                <td>05</td>
                <td>시설 대여비</td>
              </tr>
              <tr>
                <td>수익코드</td>
                <td>01</td>
                <td>상품판매</td>
              </tr>
              <tr>
                <td>수익코드</td>
                <td>02</td>
                <td>배송비</td>
              </tr>
              <tr className="border-b-2 border-sky-700">
                <td>수익코드</td>
                <td>03</td>
                <td>보관비</td>
              </tr>
              <tr>
                <td>이벤트코드</td>
                <td>01</td>
                <td>1+1행사</td>
              </tr>
              <tr>
                <td>이벤트코드</td>
                <td>02</td>
                <td>2+1행사</td>
              </tr>
              <tr>
                <td>이벤트코드</td>
                <td>03</td>
                <td>4개묶음할인</td>
              </tr>
              <tr className="border-b-2 border-sky-700">
                <td>이벤트코드</td>
                <td>04</td>
                <td>가격할인</td>
              </tr>
              <tr>
                <td>지역번호코드</td>
                <td>01</td>
                <td>용신동</td>
              </tr>
              <tr>
                <td>지역번호코드</td>
                <td>02</td>
                <td>제기동</td>
              </tr>
              <tr>
                <td>지역번호코드</td>
                <td>03</td>
                <td>전농1동</td>
              </tr>
              <tr>
                <td>지역번호코드</td>
                <td>04</td>
                <td>전농2동</td>
              </tr>
              <tr>
                <td>지역번호코드</td>
                <td>05</td>
                <td>답십리1동</td>
              </tr>
              <tr>
                <td>지역번호코드</td>
                <td>06</td>
                <td>답십리2동</td>
              </tr>
              <tr>
                <td>지역번호코드</td>
                <td>07</td>
                <td>장안1동</td>
              </tr>
              <tr>
                <td>지역번호코드</td>
                <td>08</td>
                <td>장안2동</td>
              </tr>
              <tr>
                <td>지역번호코드</td>
                <td>09</td>
                <td>청량리동</td>
              </tr>
              <tr>
                <td>지역번호코드</td>
                <td>10</td>
                <td>회기동</td>
              </tr>
              <tr>
                <td>지역번호코드</td>
                <td>11</td>
                <td>휘경1동</td>
              </tr>
              <tr>
                <td>지역번호코드</td>
                <td>12</td>
                <td>휘경2동</td>
              </tr>
              <tr>
                <td>지역번호코드</td>
                <td>13</td>
                <td>이문1동</td>
              </tr>
              <tr>
                <td>지역번호코드</td>
                <td>14</td>
                <td>이문2동</td>
              </tr>
            </tbody>
          </table>
        </article>
      </main>
      <style jsx>{`
        td, tr {
          text-align: center;
          width: 33%;
        }
      `}</style>
    </div>
  )

}