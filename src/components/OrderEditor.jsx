// src/components/OrderEditor.jsx
import { useRef } from "react";
import useInput from "../hooks/useInput";

const OrderEditor = () => {
  const inputRef = useRef();
  const [delivery, onChange] = useInput();

  const onSubmit = () => {
    console.log(inputRef.current.value);
    if (inputRef.current.value == "") {
      // alert(`주소를 입력해주세요 !`);
      inputRef.current.focus();
      return;
    }
    alert(
      `주문이 완료되었습니다 ! \n 메뉴: ${delivery.menu}\n 주소: ${delivery.address}\n 요청 사항: ${delivery.request}`
    );
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      <h2>배달의민족 주문</h2>
      <div>
        <div style={{ marginBottom: 5, fontSize: 14 }}>메뉴 선택</div>
        <select
          style={{ width: 300, padding: 5 }}
          name="menu"
          value={delivery.menu}
          onChange={onChange}
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
          ref={inputRef}
          value={delivery.address}
          name="address"
          style={{ width: 300, padding: 5 }}
          placeholder="주소) 서울특별시 xx동 .."
          onChange={onChange}
        />
      </div>

      <div>
        <div style={{ marginBottom: 5, fontSize: 14 }}>배달 요청사항</div>
        <textarea
          name="request"
          value={delivery.request}
          style={{ width: 300, padding: 5 }}
          placeholder="배달 요청사항을 써 주세요..."
          onChange={onChange}
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
