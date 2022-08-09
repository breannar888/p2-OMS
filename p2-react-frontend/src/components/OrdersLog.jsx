import React, { useRef, useState, useEffect } from "react";
import { OrderState } from "../context/OrderContext";
import axios from "axios";

export const OrdersLog = () => {
  const { order, menu, ticket } = OrderState();
  const [results, setResults] = useState(order);
  const [filterType, setFilterType] = useState("ticketID");
  let searchQuery = "";


  const searchBox = useRef();
  const filterBox = useRef();

  useEffect(() => {
    setResults(order)
  }, [order])
  

  const placeholder = (event) => { setFilterType(event.target.value); setResults(order) }

  const searchResult = (event) => {
    searchQuery = event.target.value
    let filter = filterBox.current.value
    let searchValue;
    const currentResults = order.filter((oneOrder) => {
      if (searchQuery === "") {
        return oneOrder;
      } else {
        switch (filter) {
          case "ticketID": searchValue = oneOrder.ticket.ticketID; break;
          case "item": searchValue = oneOrder.menu.menuID; break;
          case "status": searchValue = oneOrder.status.statusID; break;
          default: break;
        }
        return searchValue.toString().toLowerCase().includes(searchQuery)
      }
    })
    setResults(currentResults)
  }

  return (
    <main className="container col-9 p-3">
      <h1>Orders Log</h1>
      <form className="row m-3">
        <div className="col-1 align-self-center" id="searchLabel">Search</div>
        <div className="col-7">
          <select className="form-select" ref={searchBox} onChange={searchResult}  >

            {
              {
                "ticketID": <TicketInput data={ticket} />,
                "item": <ItemInput data={menu} />,
                "status": <StatusInput />
              }[filterType]

            }
          </select>
        </div>
        <div className="col-4">
          <select className="form-select col-5" ref={filterBox} onChange={placeholder}>
            <option value="ticketID" >Ticket</option>
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
              <td>{order.status.stausCode}</td>
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
      <nav aria-label="Page navigation">
        <ul class="pagination">
          <li class="page-item">
            <a
              class={currPage <= 0 ? "page-link disabled" : "page-link"}
              onClick={() => {
                updatePage(currPage - 1);
              }}
            >
              Previous
            </a>
          </li>
          {[...Array(5)].map((x, i) => {
            return (
              <li class="page-item" key={i}>
                <a
                  class={i == currPage ? "page-link active" : "page-link"}
                  onClick={() => {
                    updatePage(i);
                  }}
                >
                  {i + 1}
                </a>
              </li>
            );
          })}
          <li class="page-item">
            <a
              class={currPage >= 4 ? "page-link disabled" : "page-link"}
              onClick={() => {
                updatePage(currPage + 1);
              }}
            >
              Next
            </a>
          </li>
        </ul>
      </nav>
    </main>
  );
};

const TicketInput = (props => (
  <>
    <option value="" className="placeholder"></option>
    {props.data.map((item) => (
      <option value={item.ticketID} key={item.ticketID}>{item.ticketID}: {item.ticketName}</option>
    ))}
  </>
)
);
const ItemInput = (props => (
  <>
    <option value="" className="placeholder"></option>
    {props.data.map((item) => (
      <option value={item.menuID} key={item.menuID}>{item.menuItem}</option>
    ))}
  </>
));

const StatusInput = () => (
  <>
    <option value="" className="placeholder"></option>
    <option value="1" >New Orders</option>
    <option value="2" >Cooking</option>
    <option value="3" >Ready</option>
    <option value="4" >Served</option>
  </>
);

