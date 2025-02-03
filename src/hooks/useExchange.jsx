import { useState } from "react";

const useExchange = () => {
  const [exchange, setExchange] = useState({
    krw: 0,
    usd: 0,
  });

  const changeKrwMoney = (e) => {
    const Inputkrw = e.target.value;
    console.log(e);
    setExchange({
      krw: Inputkrw,
      usd: Inputkrw / 1400,
    });
    console.log(e.target.value);
  };

  return [exchange, changeKrwMoney];
};

export default useExchange;
