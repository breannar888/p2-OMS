import React, { useState } from "react";
import { OrderState } from "../context/OrderContext";
import axios from "axios";

export const OrderItems = ({ order }) => {
  const { updateValues, setUpdateValues, menu } = OrderState();
  const [toggle, setToggle] = useState(false);

  const updateStatus = async () => {
    try {
      axios
        .put(`http://localhost:8080/order/${order.orderID}`, {
          status: { statusID: order.status.statusID + 1 },
          menu: { menuID: order.menu.menuID },
          ticket: { ticketID: order.ticket.ticketID },
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
      axios
        .delete(`http://localhost:8080/order/${order.orderID}`)
        .then((res) => {
          if (res.status === 204) {
            setUpdateValues(!updateValues);
          }
        });
    } catch (err) {
      console.log(err);
    }
  };

  const handleToggle = async () => {
    setToggle(!toggle);
  };

  return (
    <tr key={order.orderID}>
      <th scope="row">{order.ticket.ticketID}</th>
      {toggle ? (
        <td>
          {
            <select name="cars" id="cars">
              <option value={order.menu.menuItem}>{order.menu.menuItem}</option>
              {menu.map((item) => {
                return <option value={item.menuItem} key={item.menuID}>{item.menuItem}</option>;
              })}
            </select>
          }
        </td>
      ) : (
        <td>{order.menu.menuItem}</td>
      )}
      {toggle ? (
        <td>
          <input name="notes" />
        </td>
      ) : (
        <td>{order.notes}</td>
      )}
      <td>
        <i onClick={handleDelete} className="material-symbols-outlined trash">
          delete_forever
        </i>
        <i
          onClick={handleToggle}
          className="material-symbols-outlined edit"
          title="Edit order"
        >
          edit
        </i>
        <i onClick={updateStatus} className="material-symbols-outlined next">
          east
        </i>
      </td>
    </tr>
  );
};
