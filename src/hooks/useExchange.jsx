import { useState } from "react";

const useExchange = () => {
  const [exchange, setExchange] = useState({
    krw: 0,
    usd: 0,
  });
  const exCangeRate = 1400;

  const changeMoney = (currency, value) => {
    console.log({ currency, value });
    if (currency === "krw") {
      setExchange({
        krw: value,
        usd: value / exCangeRate,
      });
    } else {
      setExchange({
        krw: value * exCangeRate,
        usd: value,
      });
    }
  };
  // console.log(e);
  // setExchange({
  //   krw: Inputkrw,
  //   usd: Inputkrw / 1400,
  // });
  // console.log(e.target.value);

  return [exchange, changeMoney];
};

export default useExchange;
