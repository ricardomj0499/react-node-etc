import React from "react";
import ReactDOM from "react-dom/client";
import { Greeting, UserCard } from "./Greeting";
import Product, { Bye } from "./Product";
import { Api, App } from "./Fetchdata";
import { Button } from "./Button";

const root = ReactDOM.createRoot(document.getElementById("root"));

// Los tipos de datos que le puedo pasar a un props, es cualquier tipo de dato de Javascript
root.render(
  <>
    <Greeting title="hola" name="gomita" />

    <Button text="click me" />
    <Button text="pay" />
    <Button text="suscribe" name="Ricar" />
  </>
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
