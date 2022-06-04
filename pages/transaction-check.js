import Link from "next/link";
import Seo from "../components/Seo";

export default function Profit() {
  
  return (
  <div>
    <Seo title="거래내역조회"/>
    <main className="mx-96">
      <div className="flex flex-row justify-between my-8">
        <div className="flex-col">
          <h1 className="text-2xl font-bold">거래내역조회</h1>
          <h1 className="text-xs text-gray-400">고객님의 해당 기간동안의 거래내역을 확인할 수 있습니다.</h1>
        </div>
        <div className="flex">
          <button className="text-sm rounded-md"
          onClick={() => window.open('/code/profit-code', '_blank')}
          >수익코드확인</button>
        </div>
      </div>
      <article className="border-2 rounded-md">
        <form className="flex flex-row justify-between">
          <div className="flex flex-col">
            <label>시작 날짜</label>
            <input placeholder="YYYY-MM-DD"/>
          </div>
          <div className="flex flex-col">
            <label>종료 날짜</label>
            <input placeholder="YYYY-MM-DD"/>
          </div>
          <div className="flex flex-col">
            <label>수익 코드</label>
            <input placeholder="00~"/>
          </div>
          <div className="flex flex-col">
            <label>지점 ID</label>
            <input placeholder="지점 ID"/>
          </div>
          <button className="bg-sky-900 text-white rounded-md px-6">조회</button>
        </form>
      </article>
      <article className="my-16 border-2">
        <div>총 0건</div>
        <table className="w-full">
          <thead align="" className="border-y-2 border-sky-900">
            <td>날짜</td>
            <td>물품분류코드</td>
            <td>물품명</td>
            <td>물품정가</td>
            <td>수입/지출</td>
          </thead>
          <tbody>
            <tr align="" className="">
              <td>2022-05-31</td>
              <td>01</td>
              <td>붕어싸만코</td>
              <td>1500</td>
              <td>수입>(코드번호)</td>
            </tr>
          </tbody>
          <tbody>
            <tr align="" className="">
              <td>2022-06-01</td>
              <td>02</td>
              <td>카스</td>
              <td>2500</td>
              <td>수입>(코드번호)</td>
            </tr>
          </tbody>
          <tr align="left">
            <td>수익 합계: <span className="text-blue-600">유도된계산값</span></td>
            <td>지출 합계: <span className="text-red-600">유도된계산값</span></td>
          </tr>
        </table>
      </article>
    </main>
  </div>
  )
}