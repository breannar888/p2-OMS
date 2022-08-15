import React, { useRef } from "react";
import { OrderState } from "../context/OrderContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";


export const AddMenuItem = () => {
  const { updateValues, setUpdateValues} = OrderState();
  const navigate = useNavigate();
  const itemName = useRef();
  const itemPrice = useRef();

  const handleSubmit = async (event) => {
    event.preventDefault();

    await axios.post("http://localhost:8080/menu/", {
      menuItem: itemName.current.value,
      price: itemPrice.current.value,
      imagePath: "placeholder",
    })
    setUpdateValues(!updateValues)
    navigate("../menu");
  }

  return (
<>
      <h1>Add Menu Item</h1>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="form-group col-11">
            <label htmlFor="name">Item Name</label>
            <input id="name" className="form-control" ref={itemName}/>
          </div>
        </div>
        <div className="row">
          <div className="form-group col-11">
            <label htmlFor="price">Item Price</label>
            <div className="input-group">
              <span className="input-group-text">$</span>
              <input className="form-control" id="price" type="number" step="0.01" placeholder="0.00" min="0" ref={itemPrice}/>
            </div>
          </div>
        </div>
        <div className="row">
          <button type="submit" className="btn col-2 m-3" id="submit">Submit</button>
        </div>

      </form>
</>
  );
};
