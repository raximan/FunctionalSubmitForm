import "./styles.css";
import { useState } from "react";
import MakeForm from "./MakeForm";
import FormData from "./FormData"
import Footer from "./Footer";

export default function App() {
  let [datas, setDatas] = useState([]);

  const addLog = (log) => {
    let newlog = {};
    newlog.name = log.name;
    newlog.surname = log.surname;
    newlog.age = log.age;
    setDatas([...datas, newlog]);
  };

function deleteLog (index) {
    setDatas( datas.filter(item=>  item !== datas[index]))
    console.log(datas[index])
}

  return (
    <div className="App">
      <MakeForm addLog={addLog} />
      <FormData ınputs={datas} deleteLog={deleteLog} />
      < Footer />
    </div>
  );
}
