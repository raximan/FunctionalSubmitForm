import "./styles.css";
import { useState } from "react";
function MakeForm({ addLog }) {
  let [data, setData] = useState({ name: "", surname: "", age: "" });

  function handleSubmit(event) {
    addLog(data);
    setData({ name: "", surname: "", age: "" });
    event.preventDefault();
  }

  function handleName(event) {
    setData({ ...data, name: event.target.value });
    //console.log(event.target.value);
    //console.log(data.name);
  }

  function handleSurname(event) {
    setData({ ...data, surname: event.target.value });
    //console.log(data.surname);
  }

  function handleAge(event) {
    setData({ ...data, age: event.target.value });
    //console.log(data.age);
  }

  return (
    <div className="makeform">
      <form onSubmit={handleSubmit}>
        <div className="title">Welcome {data.name} </div>
        <div className="subtitle">Let Us Know Who You Are</div>
        <div className="input-container ic1">
          <input
            id="firstname"
            className="input"
            type="text"
            value={data.name}
            onChange={handleName}
          />
          <div className="cut"></div>
          <label htmlFor="firstname" className="placeholder">
            First name
          </label>
        </div>
        <div className="input-container ic2">
          <input
            id="firstname"
            className="input"
            type="text"
            value={data.surname}
            onChange={handleSurname}
          />
          <div className="cut"></div>
          <label htmlFor="lastname" className="placeholder">
            Last name
          </label>
        </div>
        <div className="input-container ic2">
          <input
            id="age"
            className="input"
            type="text"
            value={data.age}
            onChange={handleAge}
          />
          <div className="cut cut-short"></div>
          <label htmlFor="age" className="placeholder">
            Age
          </label>
        </div>
        <button className="submit" type="submit" value="Submit">
          Submit
        </button>
      </form>
    </div>
  );
}
export default MakeForm;
