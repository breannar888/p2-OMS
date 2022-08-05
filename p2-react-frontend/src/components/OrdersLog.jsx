import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { OrderState } from "../context/OrderContext";
import axios from "axios";

export const OrdersLog = () => {
  const { pagedOrder, setPagedOrder } = OrderState();

  const [currPage, setCurrPage] = useState(0);

  useEffect(() => {
    console.log(pagedOrder);
  });

  const updatePage = (page) => {
    console.log("out of bounds: ", page);
    setCurrPage(page);
    axios.get(`http://localhost:8080/order/log?page=${page}`).then((resp) => {
      console.log("paged data: ", page, resp.data);
      setPagedOrder(resp.data);
    });
  };

  return (
    <main className="container col-9 p-3">
      <h1>Orders Log</h1>
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
          {pagedOrder.map((order, index) => {
            return (
              <tr key={index}>
                <td>{order[0].ticket.ticketID}</td>
                <td>{order[0].ticket.ticketName}</td>
                <td>{order[0].menu.menuItem}</td>
                <td>{order[0].notes}</td>
                <td>{order[0].status.statusCode}</td>
                <td>{order[0].menu.price}</td>
                <td>
                  <i className="material-symbols-outlined trash">
                    delete_forever
                  </i>
                </td>
              </tr>
            );
          })}
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
