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
7. Union type
8. Typeof
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

//interface
interface IPeople {
  name: string;
  age: number;
  location?: string;
}
//interface
interface IRelationship {
  wifeName: String;
  childName: String;
}
//Intersection
interface IEmployee extends IPeople, IRelationship {
  jobTitle: string;
  degree: Degree;
  level: number | string | Degree; //union
}
//enum
enum Degree {
  Bachelor,
  Master,
  PhD,
}

//  type Workers = {
// name: string;
// age: number;
//  }

//generic type
type ApiResponse<DataType, MessageType> = {
  data: DataType;
  status: "success" | "failure";
  message?: MessageType;
};

// type BookResponse = {
//   data: { id: number; name: string };
//   status: "success" | "failure";
// };

function App() {
  const [count, setCount] = useState<number>(0);
  const [people, setPeople] = useState<IPeople>();

  const userResponse: ApiResponse<{ id: number; name: string }, string> = {
    data: { id: 1, name: "Thang" },
    status: "success",
    message: "hello"
  };

  const bookReponse: ApiResponse<{ id: number; bookname: string }, string> = {
    data: { id: 1, bookname: "book1" },
    status: "success",
    message: "123"
  };

  const employee: IEmployee = {
    name: "Thang",
    age: 22,
    jobTitle: "SE and BA",
    degree: Degree.Bachelor, //enum
    wifeName: "undefined",
    childName: "undefined",
    level: Degree.Master, //union
  };
  //typeof
  const employee2: typeof employee = {
    name: "Thang",
    age: 22,
    jobTitle: "SE and BA",
    degree: Degree.Bachelor,
    wifeName: "undefined",
    childName: "undefined",
    level: Degree.Master,
  };

  function total(number1: number, number2: number): string {
    return String(number1 + number2);
  }

  console.log(people, employee, employee2, userResponse, bookReponse);

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
