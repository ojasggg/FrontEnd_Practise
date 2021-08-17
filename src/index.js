import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

function Main() {
  return (
    <div className="overall">
      <Book />
      <Book />
      <Book />
      <Book />
    </div>
  );
}

function Book() {
  return (
    <div className="container">
      <Book_image />
      <Title />
      <Autor />
    </div>
  );
}

const Book_image = () => (
  <img
    src="https://images-na.ssl-images-amazon.com/images/I/51UvPYjG+gS._AC_SX184_.jpg"
    alt="#"
  />
);

const Title = () => <h1>Putting It Together</h1>;

const Autor = () => <h4>Ojash Gurung</h4>;

ReactDOM.render(<Main />, document.getElementById("root"));
