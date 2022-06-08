import Link from "next/link";
import Seo from "../components/Seo";
import { useState } from "react";

function Check() {
  
  const [codeId, setCodeId] = useState("");
  const [stuffName, setStuffName] = useState("");
  const [result, setResult] = useState([]);

  const onChange = (event) => {
    setCodeId(event.target.value);
  }
  const handleStuff = (event) => {
    setStuffName(event.target.value);
  }

  const handleClick = (event) => {
    event.preventDefault();
    console.log("api 실행하는 부분임");
  }
  
  return (
    <div>
      <article className="border-2 rounded-md w-1/2">
        <form className="flex flex-row justify-between">
          <div className="flex flex-col basis-1/3">
            <label className="">이벤트 타입</label>
            <input name="codeId" value={codeId} onChange={onChange} 
            type="number" placeholder="코드번호를 입력해주세요."/>
          </div>
          <div className="flex flex-col basis-1/3">
            <label>품목</label>
            <input name="stuff" value={stuffName} onChange={handleStuff}
            type="text" placeholder="품목 이름을 입력해주세요."/>
          </div>
          <div>
            <button onClick={handleClick}
            className="bg-sky-700 text-white rounded-md px-6 mr-0.5 h-full">조회</button>
          </div>
        </form>
      </article>
      <article className="my-16 border-2">
        <div>총 {result.length}건</div>
        <table className="w-full">
          <thead align="" className="border-y-2 border-sky-700">
            <td width="12.5%">이벤트ID</td>
            <td width="12.5%">이벤트 코드</td>
            <td width="12.5%">품목</td>
            <td width="12.5%">품목 번호</td>
            <td width="12.5%">할인율</td>
            <td width="12.5%">할인가</td>
            <td width="12.5%">시작 날짜</td>
            <td width="12.5%">종료 날짜</td>
          </thead>
        </table>
      </article>
    </div>
  );
}

function Enter() {
  const [input, setInput] = useState({
    stuffName:"",
    price:"",
    rate:"",
    startDate:"",
    endDate:"",
    code:""
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
    if (input.stuffName === "" || input.startDate=== "" || input.endDate === "" || input.code === "") {
      alert("필수 사항을 입력해주세요.");
      return;
    }
    setEnter([...enter, input]);
    setInput({
      stuffName:"",
      rate:"",
      price:"",
      startDate:"",
      endDate:"",
      code:""
    })
    
  }
  

  return (
    <div>
      <article className="border-2 rounded-md">
        <form className="flex flex-row justify-between w-full">
          <div className="flex flex-col w-24">
            <label className="">이벤트 코드</label>
            <input name="code" value={input.code} onChange={onChange} 
            type="number" placeholder="코드번호"/>
          </div>
          <div className="flex flex-col w-32">
            <label className="">품목</label>
            <input name="stuffName" value={input.stuffName} onChange={onChange} 
            type="text" placeholder="품목 이름"/>
          </div>
          <div className="flex flex-col w-32">
            <label className="">할인율</label>
            <input name="rate" value={input.rate} onChange={onChange} 
            type="number" placeholder="선택사항입니다."/>
          </div>
          <div className="flex flex-col w-32">
            <label>할인가</label>
            <input name="price" value={input.price} onChange={onChange}
            type="number" placeholder="선택사항입니다."/>
          </div>
          <div className="flex flex-col">
            <label className="">이벤트 시작날짜</label>
            <input name="startDate" value={input.startDate} onChange={onChange} 
            type="date" placeholder="시작날짜를 입력해주세요."/>
          </div>
          <div className="flex flex-col">
            <label className="">이벤트 종료날짜</label>
            <input name="endDate" value={input.endDate} onChange={onChange} 
            type="date" placeholder="종료날짜를 입력해주세요."/>
          </div>
          <div>
            <button onClick={handleClick}
            className="bg-sky-700 text-white rounded-md px-6 mr-0.5 h-full">추가</button>
            <button onClick={handleClick}
            className="bg-sky-700 text-white rounded-md px-6 mr-0.5 h-full">전송</button>
          </div>
        </form>
      </article>
      <article className="my-16 border-2">
        <div>총 {enter.length}건</div>
        <table className="w-full">
          <thead align="" className="border-y-2 border-sky-700">
            <td width="12.5%">이벤트 코드</td>
            <td width="12.5%">품목</td>
            <td width="12.5%">할인율</td>
            <td width="12.5%">할인가</td>
            <td width="12.5%">시작 날짜</td>
            <td width="12.5%">종료 날짜</td>
          </thead>
          {enter?.map((item, index) => 
            <tbody key={index}>
              <tr>
                <td>{item.code}</td>
                <td>{item.stuffName}</td>
                <td>{item.rate}</td>
                <td>{item.price}</td>
                <td>{item.startDate}</td>
                <td>{item.endDate}</td>
              </tr>
            </tbody>
          )}
        </table>
      </article>
    </div>
  );
}



export default function Event() {
  const [type, setType] = useState("check");
  const onChange = (event) => setType(event.target.value);
  const openWindow = () => {
    const options = 'top=10, left=10, width=400, height=600, status=no, menubar=no, toolbar=no, resizable=no';
    window.open("/code","코드", options);
  }

  return (
  <div>
    <Seo title="이벤트"/>
    <main className="mx-96">
      <article>
        <div className="flex flex-row justify-between my-8">
          <div className="flex-col">
            <h1 className="text-2xl font-bold">이벤트</h1>
            <h1 className="text-xs text-gray-400">이벤트 물품 조회/등록을 할 수 있습니다.</h1>
            <button onClick={openWindow}
            className="text-sm rounded-md">코드확인</button>
          </div>
          <div>
            <label htmlFor="type-select" className="px-4">유형: </label>
            <select value={type} onChange={onChange} id="type-select">
              <option value="check">이벤트 조회</option>
              <option value="enter">이벤트 입력</option>
            </select>
          </div>
        </div>
      </article>
      {type === "check" ? <Check /> : <Enter />}
    </main>
  </div>
  )
}