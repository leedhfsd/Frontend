
export default function Profit() {
  return (
  <div>
    <h1>수익 확인</h1>
    <form className="flex flex-row">
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
    </form>
  </div>
  )
}