import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Count } from "./Count";
/*1. Tạo type cho prop trong Component 
2. Type và interface
3. Tạo type cho function
4. Type cho hook usestate
5. Intersection với type 
6. enum type
*/

// type People = {
//   name: string;
//   age: number;
//   location?: string;
// };

// type Employees = People & {

//   jobTitle: string;
//   degree?: string;
// };

//Intersection

interface IPeople {
  name: string;
  age: number;
  location?: string;
}

interface IRelationship {
  wifeName: String;
  childName: String;
}

interface IEmployee extends IPeople, IRelationship {
  jobTitle: string;
  degree: Degree;
}

enum Degree {
  Bachelor,
  Master,
  PhD,
}

//  type Workers = {
// name: string;
// age: number;
//  }

function App() {
  const [count, setCount] = useState<number>(0);
  const [people, setPeople] = useState<IPeople>();

  const employee: IEmployee = {
    name: "Thang",
    age: 22,
    jobTitle: "SE and BA",
    degree: "Fresher",
    wifeName: "undefined",
    childName: "undefined",
  };

  function total(number1: number, number2: number): string {
    return String(number1 + number2);
  }

  console.log(people, employee);

  useEffect(() => {
    setPeople({
      name: "John Doe",
      age: 30,
      location: "SG",
    });
  });

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

      <Count count={count} setCount={setCount} total={total} />

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
