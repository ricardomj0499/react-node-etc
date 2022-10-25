import React, { Fragment, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { Posts } from "./Post";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Counter() {
  const [msj, setMsj] = useState("");
  const [cont, setCont] = useState(0);

  useEffect(() => {
    // Update the document title using the browser API
    console.log("Se ha actualizad el componente");
  }, [cont, msj]); // quitar el msj, para que solo corra una vez
  return (
    <div>
      <input onChange={(e) => setMsj(e.target.value)} />
      <button
        onClick={() => {
          console.log(msj);
        }}
      >
        Submitt
      </button>
      <hr />
      <button onClick={() => setCont(cont + 10)}>Sumar 1</button>
    </div>
  );
}

// Los tipos de datos que le puedo pasar a un props, es cualquier tipo de dato de Javascript
root.render(
  <Fragment>
    <Counter />
  </Fragment>
);
//<Api />
//<App />
// <Greeting />
// <Name />
// <Product />
// <Bye />
/*
<UserCard
      name="Ryan Ray"
      amount={3000}
      married={true}
      points={[26.4, 8]}
      address={{ street: "San Peter", city: "Atenas" }}
      greet={function () {
        alert("hello");
      }}
    />
    <UserCard
      name="Gomita"
      amount={5000}
      married={false}
      points={100}
      address={{ street: "1", city: "San Miguel" }}
      greet={function () {
        alert("adios");
      }}
    />*/

//<Saludar />

/*
<Greeting title="hola" name="gomita" />

    <Button text="click me" />

    <TaskCard ready={false} />

    <p></p>
*/

/*
<Posts />

{/*<input id="input" onBlur={(e) => console.log(e.target.value)} />*/

/*
  <form
    onSubmit={(e) => {
      e.preventDefault();
      console.log("enviado");
    }}
  >
    <h1> Registro de usuario jeje</h1>
    <button>enviar</button>
  </form>
  */

// Arreglos de react
/*
const users = [
  {
    id: 1,
    name: "ricardo",
    img: "https://robohash.org/Ricardo",
  },
  {
    id: 2,
    name: "Antonio",
    img: "https://robohash.org/Antonio",
  },
];
  {users.map((sorc, index) => {
    return (
      <div key={index}>
        <h1>{sorc.name}</h1>
        <img src={sorc.img} />
      </div>
    );
  })}*/

/*
USER STATE

import React, { Fragment, useState, UseState } from "react";

const [x, setX] = useState(0);

<button onClick={() => setX(x + 10)}>Sumar 1</button>
      <button onClick={() => setX(x - 5)}>Restar 1</button>
      <button onClick={() => setX(0)}>Set 0</button>
  */
