import { createContext, useContext } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";

export const OrderContext = createContext();

const OrderProvider = (props) => {
  const [order, setOrder] = useState([]);
  const [menu, setMenu] = useState([]);
  const [updateValues, setUpdateValues] = useState(false);

  useEffect(() => {
    axios
      .all([
        axios.get("http://localhost:8080/order"),
        axios.get("http://localhost:8080/menu"),
      ])
      .then(
        axios.spread((orderResp, menuResp) => {
          setOrder(orderResp.data);
          setMenu(menuResp.data);
          console.log("order: ", orderResp.data, "menu: ",  menuResp.data);
        })
      )
      .catch((error) => console.log(error));
  }, [updateValues]);

  const value = {
    order,
    setOrder,
    menu,
    setMenu,
    updateValues,
    setUpdateValues,
  };

  return (
    <OrderContext.Provider value={value}>
      {props.children}
    </OrderContext.Provider>
  );
};

export default OrderProvider;

export const OrderState = () => {
  return useContext(OrderContext);
};
