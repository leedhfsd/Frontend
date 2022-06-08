import { useState } from "react";
import Seo from "../../components/Seo";
import axios from "axios";

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

    const onChange = async (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(input);
        if (input.branch === "" || input.weight === "" || input.b_phone === "" || input.b_name === "" || input.b_address === "" ||
            input.s_phone === "" || input.s_address === "" || input.s_name === "" || input.commision === "" || input.package_price === "" || input.package_type === "") {
            alert("모든 칸을 입력해주세요.");
            return;
        }

        const submit = {
            branch: input.branch,
            weight: input.weight,
            b_phone: input.b_phone,
            b_name: input.b_name,
            b_address: input.b_address,
            s_phone: input.s_phone,
            s_address: input.s_address,
            s_name: input.s_name,
            commision: input.commision,
            package_price: input.package_price,
            package_type: input.package_type
        }

        axios.post('http://localhost:3001/package', JSON.stringify(submit)).then((res) => {
            if (res.code === 200) {
                alert('택배 등록에 성공했습니다.')
            } else if (res.code === 401) {
                alert('로그인이 필요합니다.');
            } else {
                throw new Error()
            }
        })
    }

    return (
        <>
            <style jsx> {`
.parceldiv {
    text-align: center;
  }
  
  .parcelbutton {
    border: 1px solid #ccc;
    width: 10%;
    margin: 10px;
  }
  
  .parcelFieldset {
    border: 1px solid black;
    justify-content: center;
    width: 100%;
    margin: 0 auto;
    padding: 30px;
    font-weight: bold;
  }
  
  .parcelInput {
    justify-content: right;
    float: right;
    border: 1px solid #ccc;
    width: 70%;
    margin: 10px;
  }
  
  .parcelLabel {
    line-height: 50px;
  }
  
  .parcelLi {
    margin: 10px;
  }
        `}
            </style>
            <main className="mx-96">
                <Seo title="택배" />
                <div className="flex flex-row justify-between my-8">
                    <div className="flex-col">
                        <h1 className="text-2xl font-bold">운송장 등록하기</h1>
                        <h1 className="text-xs text-gray-400">고객님은 운송장을 등록할 수 있습니다.</h1>
                    </div>
                </div>
                <div className="parcelFieldset">
                    <h1>정보 입력</h1>
                    <li>
                        <label className="parcelLabel" htmlFor="package_type">택배 종류 선택 </label>
                        <select name="package_type" value={input.package_type} onChange={onChange}>
                            <option value="">선택하기</option>
                            <option value="택배">택배</option>
                            <option value="반값택배">반값택배</option>
                        </select>
                    </li>
                    <li>
                        <label className="parcelLabel" htmlFor="branch">지점 </label>
                        <input name="branch" className="parcelInput" placeholder="지점을 입력해주세요." type="text" value={input.branch} onChange={onChange}></input>
                    </li>
                    <li>
                        <label className="parcelLabel" htmlFor="weight">무게 </label>
                        <input name="weight" className="parcelInput" onChange={onChange} value={input.weight}
                            type="text" placeholder="무게를 입력해주세요." />
                    </li>
                    <li>
                        <label className="parcelLabel" htmlFor="b_phone">배송자 전화번호 </label>
                        <input name="b_phone" className="parcelInput" onChange={onChange} value={input.b_phone}
                            type="text" placeholder="배송자 전화번호를을 입력해주세요." />
                    </li>
                    <li>
                        <label className="parcelLabel" htmlFor="b_name">배송자 이름 </label>
                        <input name="b_name" className="parcelInput" onChange={onChange} value={input.b_name}
                            type="text" placeholder="배송자 이름을 입력해주세요." />
                    </li>
                    <li>
                        <label className="parcelLabel" htmlFor="b_address">배송지 주소 </label>
                        <input name="b_address" className="parcelInput" onChange={onChange} value={input.b_address}
                            type="text" placeholder="배송지 주소를 입력해주세요." />
                    </li>
                    <li>
                        <label className="parcelLabel" htmlFor="s_phone">수신자 전화번호 </label>
                        <input name="s_phone" className="parcelInput" onChange={onChange} value={input.s_phone}
                            type="text" placeholder="수신자 전화번호를을 입력해주세요." />
                    </li>
                    <li>
                        <label className="parcelLabel" htmlFor="s_name">수신자 이름 </label>
                        <input name="s_name" className="parcelInput" onChange={onChange} value={input.s_name}
                            type="text" placeholder="수신자 이름을 입력해주세요." />
                    </li>
                    <li>
                        <label className="parcelLabel" htmlFor="s_address">수신지 주소/지점번호 </label>
                        <input name="s_address" className="parcelInput" onChange={onChange} value={input.s_address}
                            type="text" placeholder="수신지 주소/지점번호를 입력해주세요." />
                    </li>
                    <li>
                        <label className="parcelLabel" htmlFor="commision">배송업체 수수료 </label>
                        <input name="commision" className="parcelInput" onChange={onChange} value={input.commision}
                            type="text" placeholder="배송업체 수수료를 입력해주세요." />
                    </li>
                    <li>
                        <label className="parcelLabel" htmlFor="package_price">택배 배송비/지점번호 </label>
                        <input name="package_price" className="parcelInput" onChange={onChange} value={input.package_price}
                            type="text" placeholder="택배 배송비를 입력해주세요." />
                    </li>
                    {/* <li>
                        <label className="parcelLabel" for="package_type">택배 배송비/지점번호 </label>
                        <input name="package_type" className="parcelInput" onChange={onChange} value={input.package_type}
                            type="text" placeholder="택배 종류(택배/반값택배)를 입력해주세요." />
                    </li> */}
                    <button className="parcelbutton" type="submit" onClick={handleSubmit}>확인</button>
                </div>
            </main>
        </>
    )
}