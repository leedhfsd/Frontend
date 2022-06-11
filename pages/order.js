import { useState } from "react";
import Seo from "../components/Seo";
import axios from "axios";

function Delete() {

}

function NecessarySubmit() {

}

function Check() {
  const [result, setResult] = useState([]);

  async function getList(e) {
    e.preventDefault();
    try {
      const res = await axios.get("/order").then(alert("데이터를 불러왔습니다."));
      console.log("data: ", res);
      setResult(res);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      <div>
        <button onClick={getList} className="bg-sky-700 text-white rounded-md px-6 h-full">기록 조회하기</button>
      </div>
      <article className="my-16 border-2">
        <div>총 {result.length}건</div>
        <table className="w-full">
          <thead align="" className="border-y-2 border-sky-700">
            <tr>
              <td width="15%">주문 ID</td>
              <td width="15%">주문번호코드</td>
              <td width="15%">비용</td>
              <td width="15%">날짜</td>
              <td width="15%">상품분류코드</td>
              <td width="15%">지역번호코드</td>
              <td width="10%"></td>
            </tr>
          </thead>
          <tbody>
            
          </tbody>
        </table>
      </article>
    </div>
  )
}

function Submit() {
  const [input, setInput] = useState({
    order_num: "",
    stuff_id: "",
  })

  const onChange = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value
    })
  };

  async function handleSubmit(e) {
    try {
      const res = await axios.post("/order", input).then(alert("발주처리가 완료되었습니다."));
      console.log("result: ", res.data);
      alert("...");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      <article className="border-2 rounded-md">
        <form className="flex flex-row justify-between">
          <div className="flex flex-col basis-1/2">
            <label className="">지점</label>
            <input name="order_num" value={input.order_num} onChange={onChange}
              type="text" placeholder="주문 수량을 입력하세요" />
          </div>
          <div className="flex flex-col basis-1/2">
            <label className="">지점</label>
            <input name="stuff_id" value={input.stuff_id} onChange={onChange}
              type="text" placeholder="상품분류코드를 입력하세요" />
          </div>
          <div>
            <button onClick={handleSubmit} className="bg-sky-700 text-white rounded-md px-6 h-full">추가</button>
          </div>
        </form>
      </article>
    </div>
  )
}

export default function Order() {
  const [type, setType] = useState("check");
  const onChange = (event) => setType(event.target.value);
  const openWindow = () => {
    const options = 'top=10, left=10, width=400, height=600, status=no, menubar=no, toolbar=no, resizable=no';
    window.open("/code", "코드", options);
  }

  return (
    <div>
      <Seo title="발주" />
      <main className="mx-96">
        <article>
          <div className="flex flex-row justify-between my-8">
            <div className="flex-col">
              <h1 className="text-2xl font-bold">발주 신청/조회</h1>
              <h1 className="text-xs text-gray-400">발주 신청과 조회가 가능합니다.</h1>
              <button onClick={openWindow}
                className="text-sm rounded-md">코드확인</button>
            </div>
            <div>
              <label htmlFor="type-select" className="px-4">유형: </label>
              <select value={type} onChange={onChange} id="type-select">
                <option value="check">발주기록 조회</option>
                <option value="enter">발주 신청</option>
              </select>
            </div>
          </div>
        </article>
        {type === "check" ? <Check /> : <Submit />}
      </main>
    </div>
  )
}