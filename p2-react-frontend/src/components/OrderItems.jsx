import React from "react";
import { OrderState } from "../context/OrderContext";
import axios from "axios";

export const OrderItems = ({ order }) => {
  const { updateValues, setUpdateValues } = OrderState();

  const updateStatus = async () => {
    try {
      axios
        .put(`http://localhost:8080/order/${order.orderID}`, {
          status: { statusID: order.status.statusID + 1 },
          menu: { menuID: order.menu.menuID, },
          ticket: { ticketID: order.ticket.ticketID, },
          notes: order.notes,
        })
        .then((res) => {
          if (res.status === 200) {
            setUpdateValues(!updateValues);
          }
        });
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async () => {
    try {
      axios.delete(`http://localhost:8080/order/${order.orderID}`).then((res) => {
        if (res.status === 204) {
          setUpdateValues(!updateValues);
        }
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <tr key={order.orderID}>
      <th scope="row">{order.ticket.ticketID}</th>
      <td>{order.menu.menuItem}</td>
      <td>{order.notes}</td>
      <td>
        <i onClick={handleDelete} className="material-symbols-outlined trash">
          delete_forever
        </i>
        <i
          onClick={updateStatus}
          className="material-symbols-outlined next"
        >
          east
        </i>
      </td>
    </tr>
  );
};
