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
              <th scope="col">{order.ticket.ticketID}</th>
              <th scope="col">{order.ticket.ticketName}</th>
              <th scope="col">{order.menu.menuItem}</th>
              <th scope="col">{order.notes}</th>
              <th scope="col">{order.status.statusCode}</th>
              <th scope="col">{order.menu.price}</th>
              <th scope="col">
                <i className="material-symbols-outlined trash">
                  delete_forever
                </i>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};
