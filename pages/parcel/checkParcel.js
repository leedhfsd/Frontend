import { useState } from "react";
import Seo from "../../components/Seo";
import axios from "axios";

export default function CheckParcel() {
  const openWindow = () => {
    const options = 'top=10, left=10, width=400, height=600, status=no, menubar=no, toolbar=no, resizable=no';
    window.open("/code", "코드", options);
  }

  const [input, setInput] = useState({
    branch: "",
    package_type: "",
    sortBy: "",
    limit: "",
    page: ""
  })

  const onChange = async (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(input.branch === "" || input.package_type === "" || input.sortBy === "" || input.limit === "" || input.page === "") {
      alert("모든 칸을 입력해주세요");
    }
    console.log(input);

    const submit = {
      branch: input.branch,
      package_type: input.package_type,
      sortBy: input.sortBy,
      limit: input.limit,
      page: input.page
    }

    axios.get('http://localhost:3001/package/list', {
      params: JSON.stringify(submit)
    })
      .then((res) => {
        if (res.code === 200) {
          alert('리스트를 불러왔습니다.')
        } else if (res.code === 401) {
          alert('로그인이 필요합니다.');
        } else {
          throw new Error()
        }
      })
  }

  return (
    <div>
      <Seo title="택배" />
      <main className="mx-96">
        <article>
          <div className="flex flex-row justify-between my-8">
            <div className="flex-col">
              <h1 className="text-2xl font-bold">운송장 조회하기</h1>
              <h1 className="text-xs text-gray-400">고객님은 운송장을 조회하실 수 있습니다.</h1><button onClick={openWindow}
                className="text-sm rounded-md">코드확인</button>
            </div>
          </div>
        </article>
        <article className="border-2 rounded-md w-1/1">
          <form className="flex flex-row justify-between">
            <div className="flex flex-col basis-1/5">
              <label>지점 입력</label>
              <input name="branch" type="text" value={input.branch} onChange={onChange} placeholder="지점명을 입력해주세요." />
            </div>
            <div className="flex flex-col basis-1/5">
              <label>택배 종류</label>
              <input name="package_type" type="text" value={input.package_type} onChange={onChange} placeholder="택배 종류를 입력해주세요." />
            </div>
            <div className="flex flex-col basis-1/5">
              <label>Maximum number of users</label>
              <input name="limit" type="text" value={input.limit} onChange={onChange} placeholder="선택사항입니다." />
            </div>
            <div className="flex flex-col basis-1/5">
              <label>Page number</label>
              <input name="page" type="text" value={input.page} onChange={onChange} placeholder="선택사항입니다." />
            </div>
            <div>
              <label htmlFor="type-select" className="px-1">리스트 출력 방식</label>
              <select name="sortBy" value={input.sortBy} onChange={onChange}>
                <option value="">선택하기</option>
                <option value="asc">오름차순</option>
                <option value="desc">내림차순</option>
              </select>
            </div>
            <div>
              <button className="bg-sky-700 text-white rounded-md px-6 h-full" onClick={handleSubmit}>조회</button>
            </div>
          </form>
        </article>
        <article className="my-16 border-2">
          <div>1건</div>
          <table className="w-full">
            <thead align="left" className="border-y-2 border-sky-700">
              <tr>
                <th width="10%">일자</th>
                <th width="10%">지점명</th>
                <th width="10%">비용</th>
                <th width="10%">유형</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>ex1</td>
                <td>ex2</td>
                <td>ex3</td>
                <td>ex4</td>
              </tr>
            </tbody>
          </table>
        </article>
      </main>
    </div>
  )
}
