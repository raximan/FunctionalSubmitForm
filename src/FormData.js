import "./styles.css";
export default function FormData(props) {
  return (
    <div id="formdata">
      {props.ınputs.map((element, i) => {
        return (
          <ul id="container">
            <h3> {i + 1}</h3>
            <li>
              <h4>Name: {element.name}</h4>
            </li>
            <li>
              <h4>Surname: {element.surname}</h4>
            </li>
            <li>
              <h4>Age: {element.age}</h4>
            </li>
            <button onClick={() => props.deleteLog(i)}>Delete</button>
          </ul>
        );
      })}
    </div>
  );
}
