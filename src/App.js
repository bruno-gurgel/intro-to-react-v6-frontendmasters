import React from "react";
import ReactDOM from "react-dom";

import Pet from "./Pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Lulu",
      animal: "Cat",
      breed: "From the street",
    }),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Havanese",
    }),
    React.createElement(Pet, {
      name: "Sudo",
      animal: "Dog",
      breed: "Wheaten Terrier",
    }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
