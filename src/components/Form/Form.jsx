import { useState } from "react";
import axios from "axios";

function Form({ getGroceries }) {
  let [newItemName, setNewItemName] = useState("");
  let [newQuantity, setNewQuantity] = useState("");
  let [newUnit, setNewUnit] = useState("");

  const addItem = (event) => {
    event.preventDefault();
    console.log(newItemName);
    axios
      .post("/cart", {
        name: newItemName,
        quantity: newQuantity,
        unit: newUnit,
      })
      .then((response) => {
        // clear inputs & GET requests here
        getGroceries();
        console.log(response);
        setNewItemName("");
        setNewQuantity("");
        setNewUnit("");
      })
      .catch((err) => {
        alert("Error Adding Item");
        console.log(err);
      });
  };

  return (
    <div>
      <h1>Add Item</h1>
      <div>
        <form>
          <label>Item:</label>
          <input
            value={newItemName}
            type="text"
            id="name"
            name="name"
            onChange={(evt) => setNewItemName(evt.target.value)}
          ></input>
          <span></span>
          <label>Quanity:</label>
          <input
            value={newQuantity}
            type="number"
            id="quantity"
            name="quantity"
            onChange={(evt) => setNewQuantity(evt.target.value)}
          ></input>
          <span></span>
          <label>Unit:</label>
          <input
            value={newUnit}
            type="text"
            id="unit"
            name="unit"
            onChange={(evt) => setNewUnit(evt.target.value)}
          ></input>
          <button onClick={addItem} type="submit" id="submit" name="submitBtn">
            Save
          </button>
        </form>
      </div>
    </div>
  );
}
export default Form;
