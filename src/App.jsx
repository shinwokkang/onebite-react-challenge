import "./App.css";
import OrderEditor from "./components/OrderEditor";
// Day 10 코드
// const Welcome = () => {
//   const name = "shinWook";
//   const isMember = true;

//   return (
//     <h1>
//       {isMember
//         ? `${name}님 다시 오셨군요`
//         : `${name}님
//       가입하시겠어요?`}
//     </h1>
//   );
// };

function App() {
  return (
    <>
      <OrderEditor />
    </>
  );
}

export default App;
