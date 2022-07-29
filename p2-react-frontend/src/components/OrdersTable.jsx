import React from "react";
import { OrderState } from "../context/OrderContext";

export const OrdersTable = () => {
  const { order, setOrder } = OrderState();

  return (
    <main className="container col-9">
      <h1>Current Orders</h1>
      <div className="row container">
        <div className="col ">
          <h2>New Orders</h2>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Ticket</th>
                <th scope="col">Item</th>
                <th scope="col">Notes</th>
                <th scope="col">Edit</th>
              </tr>
            </thead>
            <tbody>
              {order.map((order) => {
                if (order.status.statusID === 1) {
                  return (
                    <tr key={order.orderID}>
                      <th scope="row">{order.ticket.ticketID}</th>
                      <td>{order.menu.menuItem}</td>
                      <td>{order.notes}</td>
                      <td>
                        <i className="material-symbols-outlined trash">
                          delete_forever
                        </i>
                        <i className="material-symbols-outlined next">east</i>
                      </td>
                    </tr>
                  );
                }
              })}
            </tbody>
          </table>
        </div>
        <div className="col ">
          <h2>Cooking</h2>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Ticket</th>
                <th scope="col">Item</th>
                <th scope="col">Notes</th>
                <th scope="col">Edit</th>
              </tr>
            </thead>
            <tbody>
              {order.map((order) => {
                if (order.status.statusID === 2) {
                  return (
                    <tr key={order.orderID}>
                      <th scope="row">{order.ticket.ticketID}</th>
                      <td>{order.menu.menuItem}</td>
                      <td>{order.notes}</td>
                      <td>
                        <i className="material-symbols-outlined trash">
                          delete_forever
                        </i>
                        <i className="material-symbols-outlined next">east</i>
                      </td>
                    </tr>
                  );
                }
              })}
            </tbody>
          </table>
        </div>
        <div className="col ">
          <h2>Ready</h2>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Ticket</th>
                <th scope="col">Item</th>
                <th scope="col">Notes</th>
                <th scope="col">Edit</th>
              </tr>
            </thead>
            <tbody>
              {order.map((order) => {
                if (order.status.statusID === 3) {
                  return (
                    <tr key={order.orderID}>
                      <th scope="row">{order.ticket.ticketID}</th>
                      <td>{order.menu.menuItem}</td>
                      <td>{order.notes}</td>
                      <td>
                        <i className="material-symbols-outlined trash">
                          delete_forever
                        </i>
                        <i className="material-symbols-outlined next">east</i>
                      </td>
                    </tr>
                  );
                }
              })}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
};
