import { StrictMode, useEffect, useState } from "react";
import ReactDOM from "react-dom";

const App = () => {
  const [number, setNumber] = useState(0);
  const [aNumber, setAnumber] = useState(0);
  const sayHello = () => console.log("hello");
  useEffect(sayHello, [number]);
  //[]의 경우 한번만 실행하게 됨
  return (
    <div className="App">
      <div>Hi</div>
      <button onClick={() => setNumber(number + 1)}>{number}</button>
      <button onClick={() => setAnumber(aNumber + 1)}>{aNumber}</button>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);