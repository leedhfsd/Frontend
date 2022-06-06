import Seo from "../components/Seo";
import { useState } from "react";

export default function ParcelService() {
  const [input, setInput] = useState({
    branch: "", // 지점명
    weight: "", // 택배 무게
    b_phone: "", // 배송자 전화번호
    b_name: "", // 배송자 성명
    b_address: "", // 배송시작 지점번호
    s_phone: "", // 수신자 전화번호
    s_address: "", // 수신자 주소 또는 수신 지점번호
    s_name: "", // 수신자 이름
    commision: "", // 수수료
    package_price: "", // 택배 비용 
    package_type: "" // 택배 또는 반값택배
  })

  const onChange = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value
    })
  };

  // const set_package_type = () => {
  //   var package_type = document.getElementById('package_type')
  //   input.package_type = package_type.options[package_type.selectedIndex].value;
  // }

  // const check_package_type = () => {
  //   console.log((input.package_price === "택배"));
  //   if (input.package_price === "택배") {
  //     return 1;
  //   } else {
  //     return 0;
  //   }
  // }

  return (
    <main className="mx-96">
      <div className="flex flex-row justify-between my-8">
        <div className="flex-col">
          <h1 className="text-2xl font-bold">택배 배송하기</h1>
          <h1 className="text-xs text-gray-400">고객님은 택배나 반값택배 서비스를 이용하실 수 있습니다.</h1>
        </div>
      </div>
      <div className="parcelFieldset">
        <h1>정보 입력</h1>
        <li>
          <label for="user-name">택배 종류 선택 </label>
          <select id="package_type" onChange={onChange}>
            <option value="택배">택배</option>
            <option value="반값택배">반값택배</option>
          </select>
        </li>
        <li>
          <label for="user-name">지점 </label>
          <input className="parcelInput" onChange={onChange} value={input.branch}
            type="string" placeholder="지점을 입력해주세요." />
        </li>
        <li>
          <label for="user-name">무게 </label>
          <input className="parcelInput" onChange={onChange} value={input.weight}
            type="string" placeholder="무게를 입력해주세요." />
        </li>
        <li>
          <label for="user-name">지점 </label>
          <input className="parcelInput" onChange={onChange} value={input.b_phone}
            type="string" placeholder="배송자 전화번호를을 입력해주세요." />
        </li>
        <li>
          <label for="user-name">지점 </label>
          <input className="parcelInput" onChange={onChange} value={input.b_name}
            type="string" placeholder="배송자 이름을 입력해주세요." />
        </li>
        <li>
          <label for="user-name">지점 </label>
          <input className="parcelInput" onChange={onChange} value={input.b_address}
            type="string" placeholder="배송지점을 입력해주세요." />
        </li>
        <li>
          <label for="user-name">지점 </label>
          <input className="parcelInput" onChange={onChange} value={input.s_phone}
            type="string" placeholder="수신자 전화번호를을 입력해주세요." />
        </li>
        <li>
          <label for="user-name">지점 </label>
          <input className="parcelInput" onChange={onChange} value={input.s_name}
            type="string" placeholder="수신자 이름을 입력해주세요." />
        </li>
        <li>
          <label for="user-name">지점 </label>
          <input className="parcelInput" onChange={onChange} value={input.s_address}
            type="string" placeholder="수신지 주소/지점번호를 입력해주세요." />
        </li>
        <button className="parcelbutton">확인</button>
      </div>
    </main>
  )
}