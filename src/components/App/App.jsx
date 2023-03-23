import React, { useState, useEffect } from "react";
import Header from "../Header/Header.jsx";
import "./App.css";
import ShoppingList from "../ShoppingList/ShoppingList.jsx";
import axios from "axios";
import Form from "../Form/Form.jsx";

function App() {
  let [shoppingList, setShoppingList] = useState([]);

  useEffect(() => {
    getGroceries();
  }, []);

  const getGroceries = () => {
    axios
      .get("/cart")
      .then((response) => {
        setShoppingList(response.data);
        console.log("in get client looking at shoplist:", shoppingList);
      })
      .catch((err) => {
        alert("error in get request");
        console.log(err);
      });
  };

  return (
    <div className="App">
      <Header />
      {/* <p>{shoppingList}</p> */}
      <main>
        <p>Under Construction...</p>
        <Form getGroceries={getGroceries} />
        <ShoppingList getGroceries={getGroceries} list={shoppingList} />
      </main>
    </div>
  );
}

export default App;
