import useExchange from "../hooks/useExchange";

const Viewer = () => {
  const [exchange, changeKrwMoney] = useExchange();

  return (
    <div>
      <h1>환율 변환기 (KRW-USD)</h1>
      <div>
        krw:{" "}
        <input
          type="number"
          name="krw"
          onChange={changeKrwMoney}
          value={exchange.krw}
        ></input>
      </div>
      <div>
        usd:{" "}
        <input type="number" name="usd" value={exchange.usd.toFixed(2)}></input>
      </div>
    </div>
  );
};
export default Viewer;
