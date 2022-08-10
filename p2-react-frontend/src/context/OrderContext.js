import { createContext, useContext } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";
import { useCookies } from "react-cookie";
// import {useNavigate} from "react-router-dom"

export const OrderContext = createContext();

axios.defaults.crossDomain = true;
axios.defaults.withCredentials = true;

const OrderProvider = (props) => {
  const [order, setOrder] = useState([]);
  const [menu, setMenu] = useState([]);
  const [ticket, setTicket] = useState([]);
  const [pagedOrder, setPagedOrder] = useState([]);
  const [ticketSum, setTicketSum] = useState([]);
  const [updateValues, setUpdateValues] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies();
  // const navigate = useNavigate();


  useEffect(() => {
    // console.log(cookies);
    if ((cookies["JSESSIONID"] !== "undefined") && (cookies.hasOwnProperty('JSESSIONID'))) {
      // console.log("cookies read: ", cookies);
      axios
        .all([
          // these GET requests are for when I look at the page on my iPad
          // axios.get("http://10.0.0.50:8080/order"),
          // axios.get("http://10.0.0.50:8080/menu"),
          // axios.get("http://10.0.0.50:8080/ticket"),
          axios.get("http://localhost:8080/order"),
          axios.get("http://localhost:8080/menu"),
          axios.get("http://localhost:8080/ticket"),
          axios.get("http://localhost:8080/order/log"),
          axios.get("http://localhost:8080/ticket/sum"),
        ])
        .then(
          axios.spread(
            (orderResp, menuResp, ticketResp, pagedOrderResp, sumResp) => {
              setOrder(orderResp.data);
              setMenu(menuResp.data);
              setTicket(ticketResp.data);
              setPagedOrder(pagedOrderResp.data);
              setTicketSum(sumResp.data);
              // console.log("order: ", orderResp.data, "menu: ", menuResp.data);
            }
          )
        )
        .catch((error) => console.log(error));
    } 
  }, [updateValues, cookies]);


  const value = {
    order,
    setOrder,
    menu,
    setMenu,
    ticket,
    setTicket,
    updateValues,
    setUpdateValues,
    pagedOrder,
    setPagedOrder,
    cookies,
    setCookie,
    ticketSum,
    setTicketSum,
    removeCookie,
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
