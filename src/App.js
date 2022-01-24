import axios from "axios";
import { useState, useEffect } from "react";
import "./App.css";
import { Table } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [result, setResult] = useState([]);
  useEffect(() => {
    const obj = axios
      .get("https://run.mocky.io/v3/8260aa5d-8af8-4cff-999e-6e81b217f0ba")
      .then((res) => {
        setResult(res.data.clients);
      });
  }, []);

  return (
    <div className="App">
      <Table className="app-table" bordered dark>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Company</th>
          </tr>
        </thead>
        {result.map((val, key) => {
          return (
            <tbody>
              <tr>
                <th scope="row">{key}</th>
                <td>{val.name}</td>
                <td>{val.company}</td>
              </tr>
            </tbody>
          );
        })}
      </Table>
    </div>
  );
}

export default App;
