// import { useState } from "react";
import "./App.css";
import Input from "./components/Input";
import List from "./components/List";

function App() {
  // const [count, setCount] = useState<number>(0);

  return (
    <>
      {/* <Input value={count} onChange={setCount} onSubmit={console.log} /> */}
      <Input />
      <List items={["Learn React", "Learn Vite", "Make an awesome app"]} />
    </>
  );
}

export default App;
