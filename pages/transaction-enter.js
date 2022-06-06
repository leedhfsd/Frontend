import Link from "next/link";
import Seo from "../components/Seo";
import { useState } from "react";

function Profit() {

  const [input, setInput] = useState({
    date:"",
    code:"",
    amount:"",
    branchId:""
  })
  const [enter, setEnter] = useState([]);
  const [sum, setSum] = useState(0);
  const onChange = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value
    })
  };
  
  const handleClick = (event) => {
    event.preventDefault();
    if (input.amount === "" || input.branchId === "" || input.code === "" || input.date === "") {
      alert("모든 칸을 입력해주세요.");
      return;
    }
    setEnter([...enter, input]);
    setInput({
      date:"",
      code:"",
      amount:"",
      branchId:""
    })
    setSum((current) => current + Number(input.amount));
  }

  return (
    <div>
      <article className="border-2 rounded-md">
        <form className="flex flex-row justify-between">
          <div className="flex flex-col basis-1/5">
            <label>날짜</label>
            <input name="date" onChange={onChange} value={input.date}
            type="date" placeholder="YYYY-MM-DD"/>
          </div>
          <div className="flex flex-col basis-1/5">
            <label>수익 코드</label>
            <input name="code" onChange={onChange} value={input.code}
            type="number" placeholder="코드번호를 입력해주세요."/>
          </div>
          <div className="flex flex-col basis-1/5">
            <label>수익 금액</label>
            <input name="amount" onChange={onChange} value={input.amount}
            type="number" placeholder="금액을 입력해주세요."/>
          </div>
          <div className="flex flex-col basis-1/5">
            <label>지점 번호</label>
            <input name="branchId" onChange={onChange} value={input.branchId}
            type="number" placeholder="지점번호를 입력해주세요."/>
          </div>
          <div>
            <button onClick={handleClick}
            className="bg-sky-700 text-white rounded-md px-6 mr-0.5 h-full">추가</button>
            <button className="bg-sky-700 text-white rounded-md px-6 h-full">전송</button>
          </div>
        </form>
      </article>
      <article className="my-16 border-2">
        <div>총 {enter.length}건</div>
        <table className="w-full">
          <thead align="" className="border-y-2 border-sky-700">
            <td width="25%">날짜</td>
            <td width="25%">수익코드</td>
            <td width="25%">금액</td>
            <td width="25%">지점번호</td>
          </thead>
          {enter?.map((item, index) => 
            <tbody key={index}>
              <tr>
                <td>{item.date}</td>
                <td>{item.code}</td>
                <td>{item.amount}</td>
                <td>{item.branchId}</td>
              </tr>
            </tbody>
          )}
          <tr align="left">
            <td>수익 합계: <span className="text-blue-600">{sum} 원</span></td>
          </tr>
        </table>
      </article>
    </div>
  )
}

function Spending() {
  const [input, setInput] = useState({
    date:"",
    code:"",
    amount:"",
    branchId:""
  })
  const [enter, setEnter] = useState([]);
  const [sum, setSum] = useState(0);
  const onChange = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value
    })
  };
  
  const handleClick = (event) => {
    event.preventDefault();
    if (input.amount === "" || input.branchId === "" || input.code === "" || input.date === "") {
      alert("모든 칸을 입력해주세요.");
      return;
    }
    setEnter([...enter, input]);
    setInput({
      date:"",
      code:"",
      amount:"",
      branchId:""
    })
    setSum((current) => current + Number(input.amount));
  }

  return (
    <div>
      <article className="border-2 rounded-md">
        <form className="flex flex-row justify-between">
          <div className="flex flex-col basis-1/5">
            <label className="">날짜</label>
            <input name="date" onChange={onChange} value={input.date}
            type="date" placeholder="YYYY-MM-DD"/>
          </div>
          <div className="flex flex-col basis-1/5">
            <label>지출 코드</label>
            <input name="code" onChange={onChange} value={input.code}
            type="number" placeholder="코드번호를 입력해주세요."/>
          </div>
          <div className="flex flex-col basis-1/5">
            <label>지출 금액</label>
            <input name="amount" onChange={onChange} value={input.amount}
            type="number" placeholder="금액을 입력해주세요."/>
          </div>
          <div className="flex flex-col basis-1/5">
            <label>지점 번호</label>
            <input name="branchId" onChange={onChange} value={input.branchId}
            type="number" placeholder="지점번호를 입력해주세요."/>
          </div>
          <div>
            <button onClick={handleClick}
            className="bg-sky-700 text-white rounded-md px-6 mr-0.5 h-full">추가</button>
            <button className="bg-sky-700 text-white rounded-md px-6 h-full">전송</button>
          </div>
        </form>
      </article>
      <article className="my-16 border-2">
        <div>총 {enter.length}건</div>
        <table className="w-full">
          <thead align="" className="border-y-2 border-sky-700">
            <td width="25%">날짜</td>
            <td width="25%">지출코드</td>
            <td width="25%">금액</td>
            <td width="25%">지점번호</td>
          </thead>
          {enter?.map((item, index) => 
            <tbody key={index}>
              <tr>
                <td>{item.date}</td>
                <td>{item.code}</td>
                <td>{item.amount}</td>
                <td>{item.branchId}</td>
              </tr>
            </tbody>
          )}
          <tr align="left">
            <td>지출 합계: <span className="text-red-600">{sum} 원</span></td>
          </tr>
        </table>
      </article>
    </div>
  )
}


export default function TransactionEnter() {
  const [type, setType] = useState("profit");
  const onChange = (event) => setType(event.target.value);
  const openWindow = () => {
    const options = 'top=10, left=10, width=400, height=600, status=no, menubar=no, toolbar=no, resizable=no';
    window.open("/code","코드", options);
  }

  return (
  <div>
    <Seo title="입력"/>
    <main className="mx-96">
      <article>
        <div className="flex flex-row justify-between my-8">
          <div className="flex-col">
            <h1 className="text-2xl font-bold">거래내역입력</h1>
            <h1 className="text-xs text-gray-400">고객님의 해당 기간동안의 거래내역을 입력할 수 있습니다.</h1>
            <button onClick={openWindow}
            className="text-sm rounded-md">코드확인</button>
          </div>
          <div>
            <label htmlFor="type-select" className="px-4">거래 유형: </label>
            <select value={type} onChange={onChange} id="type-select">
              <option value="profit">수익 입력</option>
              <option value="spending">지출 입력</option>
            </select>
          </div>
        </div>
      </article>
      {type === "profit" ? <Profit /> : <Spending />}
    </main>
  </div>
  )
}