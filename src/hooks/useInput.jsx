import { useState, useRef } from "react";

const useInput = () => {
  const inputRef = useRef();

  const [delivery, setDelivery] = useState({
    menu: "", // menu:"족발",
    address: "",
    request: "",
  });

  const onChange = (e) => {
    setDelivery({
      ...delivery,
      [e.target.name]: e.target.value,
    });
  };

  return [delivery, onChange];
};

export default useInput;
