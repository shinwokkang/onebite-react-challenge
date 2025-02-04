import useExchange from "../hooks/useExchange";
import Input from "./Input";

const Viewer = () => {
  const [exchange, changeMoney] = useExchange();

  return (
    <div>
      <h1>환율 변환기 (KRW-USD)</h1>
      <div>
        <Input currency={"krw"} value={exchange.krw} onChange={changeMoney} />
      </div>
      <div>
        <Input currency={"usd"} value={exchange.usd} onChange={changeMoney} />
      </div>
    </div>
  );
};
export default Viewer;
