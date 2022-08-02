import React from "react";
import { OrderState } from "../context/OrderContext";
export const OrdersLog = () => {
  const { order } = OrderState();

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
          {order.map((order) => (
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
