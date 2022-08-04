import React, { useRef, useState } from "react";
import { OrderState } from "../context/OrderContext";
export const OrdersLog = () => {
  const { order } = OrderState();
  const [results, setResults] = useState(order);

  const searchBox = useRef();
  const filterBox = useRef();

  const placeholder = (event) => {
    let filter = event.target.value;
    searchBox.current.placeholder = `Search ${filter}`;
  }

  const searchResult = (event) => {
    let searchQuery = event.target.value
    // let filter = filterBox.current.value
    // console.log(filter);
    const currentResults = order.filter((oneOrder) => {
      if (searchQuery === "") {
        return oneOrder;
      } else {
        const searchValue = oneOrder.ticket.ticketID;
        return searchValue.toString().includes(searchQuery)
      }
    })
    setResults(currentResults)
  }

  return (
    <main className="container col-9 p-3">
      <h1>Orders Log</h1>
      <form className="row m-3">
        <div className="col-8">
          <input className="form-control " placeholder='Search ticket ID' ref={searchBox} onChange={searchResult} />
        </div>
        <div className="col-4">
          <select className="form-select col-5" ref={filterBox} onChange={placeholder}>
            <option value="ticketID" >Ticket ID</option>
            <option value="item" >Item</option>
            <option value="status" >Status</option>
          </select>
        </div>
      </form>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Ticket ID</th>
            <th scope="col">Ticket Name</th>
            <th scope="col">Item</th>
            <th scope="col">Notes</th>
            <th scope="col">Status</th>
            <th scope="col">Total</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {results.map((order) => (
            <tr key={order.orderID}>
              <td>{order.ticket.ticketID}</td>
              <td>{order.ticket.ticketName}</td>
              <td>{order.menu.menuItem}</td>
              <td>{order.notes}</td>
              <td>{order.status.statusCode}</td>
              <td>{order.menu.price}</td>
              <td>
                <i className="material-symbols-outlined trash">
                  delete_forever
                </i>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};
