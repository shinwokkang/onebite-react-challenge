// src/components/OrderEditor.jsx
import { useState } from "react";

const OrderEditor = () => {
  const [menu, setMenu] = useState("족발");
  const [address, setAddress] = useState("주소 입력 전.");
  const [request, setRequest] = useState("요청 사항 없음.");

  const onSubmit = () => {
    console.log(menu);
    alert(
      `주문이 완료되었습니다 ! \n 메뉴: ${menu}\n 주소: ${address}\n 요청 사항: ${request}`
    );
  };

  console.log(menu);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      <h2>배달의민족 주문</h2>
      <div>
        <div style={{ marginBottom: 5, fontSize: 14 }}>메뉴 선택</div>
        <select
          style={{ width: 300, padding: 5 }}
          value={menu}
          onChange={(e) => setMenu(e.target.value)}
        >
          <option value={"족발"}>족발</option>
          <option value={"떡볶이"}>떡볶이</option>
          <option value={"아이스크림"}>아이스크림</option>
          <option value={"샐러드"}>샐러드</option>
        </select>
      </div>

      <div>
        <div style={{ marginBottom: 5, fontSize: 14 }}>배달 주소</div>
        <input
          // value={address}
          style={{ width: 300, padding: 5 }}
          placeholder="주소) 서울특별시 xx동 .."
          onChange={(e) => {
            setAddress(e.target.value);
          }}
        />
      </div>

      <div>
        <div style={{ marginBottom: 5, fontSize: 14 }}>배달 요청사항</div>
        <textarea
          // value={request}
          style={{ width: 300, padding: 5 }}
          placeholder="배달 요청사항을 써 주세요..."
          onChange={(e) => {
            setRequest(e.target.value);
          }}
        />
      </div>

      <div>
        <button onClick={onSubmit} style={{ width: 300, padding: 5 }}>
          주문 완료
        </button>
      </div>
    </div>
  );
};

export default OrderEditor;
