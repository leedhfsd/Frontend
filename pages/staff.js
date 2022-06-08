import Link from "next/link";
import Seo from "../components/Seo";
import { useState } from "react";
import axios from "axios";

function Check() {

  const [input, setInput] = useState({
    employee_name:"",
    employee_phone:"",
    salary:"",
    branch_id:""
  })
  const [enter, setEnter] = useState([]);
  console.log(enter);

  const onChange = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value
    })
  };
  
  const handleClick = (event) => {
    event.preventDefault();
    if (input.salary === "" || input.branch_id === "" || input.employee_name === "" || input.employee_phone === "") {
      alert("모든 칸을 입력해주세요.");
      return;
    }
    setEnter([...enter, input]);
    setInput({
      employee_name:"",
      employee_phone:"",
      salary:"",
      branch_id:""
    })
  }
  
  return (
    <div>
      <article className="border-2 rounded-md">
        <form className="flex flex-row justify-between">
          <div className="flex flex-col basis-1/5">
            <label>이름</label>
            <input name="employee_name" onChange={onChange} value={input.employee_name}
            type="text" placeholder="직원 이름을 입력해주세요."/>
          </div>
          <div className="flex flex-col basis-1/5">
            <label>전화번호</label>
            <input name="employee_phone" onChange={onChange} value={input.employee_phone}
            type="text" placeholder="직원 번호를 입력해주세요."/>
          </div>
          <div className="flex flex-col basis-1/5">
            <label>급여</label>
            <input name="salary" onChange={onChange} value={input.salary}
            type="number" placeholder="금액을 입력해주세요."/>
          </div>
          <div className="flex flex-col basis-1/5">
            <label>지점 번호</label>
            <input name="branch_id" onChange={onChange} value={input.branch_id}
            type="number" placeholder="지점번호를 입력해주세요."/>
          </div>
          <div>
            <button onClick={handleClick}
            className="bg-sky-700 text-white rounded-md px-6 mr-0.5 h-full">조회</button>
          </div>
        </form>
      </article>
      <article className="my-16 border-2">
        <div>총 {enter.length}건</div>
        <table className="w-full">
          <thead align="" className="border-y-2 border-sky-700">
            <td width="25%">이름</td>
            <td width="25%">전화번호</td>
            <td width="25%">급여</td>
            <td width="25%">지점번호</td>
          </thead>
          {enter?.map((item, index) => 
            <tbody key={index}>
              <tr>
                <td>{item.employee_name}</td>
                <td>{item.employee_phone}</td>
                <td>{item.salary}</td>
                <td>{item.branch_id}</td>
              </tr>
            </tbody>
          )}
        </table>
      </article>
    </div>
  )
}

function Enter() {
  const [input, setInput] = useState({
    employee_name:"",
    employee_phone:"",
    salary:"",
    branch_id:""
  })
  const [enter, setEnter] = useState([]);
  const onChange = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value
    })
  };
  
  const handleClick = (event) => {
    event.preventDefault();
    if (input.salary === "" || input.branch_id === "" || input.employee_name === "" || input.employee_phone === "") {
      alert("모든 칸을 입력해주세요.");
      return;
    }
    setEnter([...enter, input]);
    setInput({
      employee_name:"",
      employee_phone:"",
      salary:"",
      branch_id:""
    })
    setSum((current) => current + Number(input.salary));
  }

  return (
    <div>
      <article className="border-2 rounded-md">
        <form className="flex flex-row justify-between">
          <div className="flex flex-col basis-1/5">
            <label className="">이름</label>
            <input name="date" onChange={onChange} value={input.employee_name}
            type="text" placeholder="직원 이름을 입력해주세요."/>
          </div>
          <div className="flex flex-col basis-1/5">
            <label>전화번호</label>
            <input name="employee_phone" onChange={onChange} value={input.employee_phone}
            type="text" placeholder="직원 번호를 입력해주세요."/>
          </div>
          <div className="flex flex-col basis-1/5">
            <label>급여</label>
            <input name="salary" onChange={onChange} value={input.salary}
            type="number" placeholder="금액을 입력해주세요."/>
          </div>
          <div className="flex flex-col basis-1/5">
            <label>지점 번호</label>
            <input name="branch_id" onChange={onChange} value={input.branch_id}
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
            <td width="25%">이름</td>
            <td width="25%">전화번호</td>
            <td width="25%">급여</td>
            <td width="25%">지점번호</td>
          </thead>
          {enter?.map((item, index) => 
            <tbody key={index}>
              <tr>
                <td>{item.employee_name}</td>
                <td>{item.employee_phone}</td>
                <td>{item.salary}</td>
                <td>{item.branch_id}</td>
              </tr>
            </tbody>
          )}
        </table>
      </article>
    </div>
  )
}


export default function TransactionEnter() {
  const [type, setType] = useState("check");
  const onChange = (event) => setType(event.target.value);

  return (
  <div>
    <Seo title="입력"/>
    <main className="mx-96">
      <article>
        <div className="flex flex-row justify-between my-8">
          <div className="flex-col">
            <h1 className="text-2xl font-bold">직원관리</h1>
            <h1 className="text-xs text-gray-400">직원 현황 조회 및 추가를 할 수 있습니다.</h1>
          </div>
          <div>
            <label htmlFor="type-select" className="px-4">유형: </label>
            <select value={type} onChange={onChange} id="type-select">
              <option value="check">직원 조회</option>
              <option value="enter">직원 추가</option>
            </select>
          </div>
        </div>
      </article>
      {type === "check" ? <Check /> : <Enter />}
    </main>
  </div>
  )
}