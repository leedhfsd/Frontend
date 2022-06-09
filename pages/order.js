import { useState } from "react";
import Seo from "../components/Seo";
import axios from "axios";

export default function Order() {
  const openWindow = () => {
    const options = 'top=10, left=10, width=400, height=600, status=no, menubar=no, toolbar=no, resizable=no';
    window.open("/code", "코드", options);
  }

  const [input, setInput] = useState({
    order_num: "",
    stuff_id: "",
    branch_id: "",
  })

  const [order_id, setOrder_id] = useState('');

  const [orderList, setOrderList] = useState([]);
  const [necessaryOrderList, setNecessaryOrderList] = useState([]);

  const onChange = async (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  };

  const postOrder = async (e) => {
    e.preventDefault();
    console.log(input);

    if (input.order_num === "" || input.stuff_id === "" || input.branch_id === "") {
      alert("모든 칸을 입력해주세요.");
      return;
    }

    const submit = {
      order_num: input.order_num,
      stuff_id: input.stuff_id,
      branch_: input.branch_id
    };

    axios.post('http://localhost:3001/order', JSON.stringify(submit)).then((res) => {
      if (res.status === 200) {
        alert('발주처리 요청을 성공했습니다.')
        // setOrder_id(res.data.order_id); 과연 이 코드가 필요할까?
      } else if (res.status === 401) {
        alert('로그인이 필요합니다.');
      } else {
        throw new Error()
      }
    })
  };

  const getOrder = async (e) => {
    e.preventDefault();
    console.log(input);

    if (input.branch_id === "") {
      alert("지점 코드를 입력해주세요");
      return;
    }

    const submit = {
      branch_id: input.branch_id
    };

    var url = "http://localhost:3001/order/" + input.branch_id;

    axios.get(url)
      .then((res) => {
        if (res.status === 200) {
          alert('발주처리 요청을 성공했습니다.')
          setOrderList(JSON.stringify(res.data));
        } else if (res.status === 401) {
          alert('로그인이 필요합니다.');
        } else {
          throw new Error()
        }
      })
  };

  const deleteOrder = async (e) => {
    e.preventDefault();
    console.log(input);

    if(input.)
  };

  const getNecessaryOrder = async (e) => {
    e.preventDefault();
    console.log(input);

    if (input.branch_id === "") {
      alert("지점 코드를 입력해주세요");
      return;
    }

    const submit = {
      branch_id: input.branch_id
    };
    
    var url = "http://localhost:3001/order/necessary/" + input.branch_id;

    axios.get(url)
      .then((res) => {
        if (res.status === 200) {
          alert('리스트를 불러왔습니다.')
          setNecessaryOrderList(JSON.stringify(res.data));
        } else if (res.status === 401) {
          alert('로그인이 필요합니다.');
        } else {
          throw new Error()
        }
      })
  };

  const postNecessaryOrder = async (e) => {
    e.preventDefault();
    console.log(input);

    if (input.branch_id === "") {
      alert("지점 코드를 입력해주세요");
      return;
    }

    const submit = {
      branch_id: input.branch_id
    };

    var url = "http://localhost:3001/order/necessary/";

    axios.post(url, JSON.stringify(submit)).then((res) => {
      if (res.status === 200) {
        alert('필수발주처리 요청을 성공했습니다.');
        setOrder_id(res.data.order_id);
      } else if (res.status === 401) {
        alert('로그인이 필요합니다.');
      } else {
        throw new Error()
      }
    })
  };

  return (
    <div>
      <Seo title="발주" />
      <main className="mx-96">
        <article>
          <div className="flex flex-row justify-between my-8">
            <div className="flex-col">
              <h1 className="text-2xl font-bold">발주</h1>
              <h1 className="text-xs text-gray-400">고객님은 필요한 물품들에 대해 발주 처리를 할 수 있습니다.</h1>
              <button onClick={openWindow}
                className="text-sm rounded-md">코드확인</button>
            </div>
          </div>
        </article>
      </main>
    </div>
  )
}