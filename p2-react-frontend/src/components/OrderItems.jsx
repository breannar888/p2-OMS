import React, { useState, useRef } from "react";
import { OrderState } from "../context/OrderContext";
import axios from "axios";

export const OrderItems = ({ order }) => {
  const { updateValues, setUpdateValues, menu } = OrderState();
  const [toggle, setToggle] = useState(false);

  const menuItemRef = useRef();
  const notesRef = useRef();

 
  
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

  const handleUpdate = async () => {
    console.log(order.orderID);
    try {
      axios
        .put(`http://localhost:8080/order/${order.orderID}`, {
          menu: {
            menuID: menuItemRef.current.value,
          },
          notes: notesRef.current.value,
          status: order.status,
          ticket: order.ticket,
        })
        .then((res) => {
          if (res.status === 200) {
            setUpdateValues(!updateValues);
            setToggle(false);
            console.log(menu);
          }
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <tr key={order.orderID}>
      <th scope="row">{order.ticket.ticketID}</th>
      {toggle ? (
        <td>
          {
            <select
              name="menuItem"
              id="menuItem"
              className="form-select"
              ref={menuItemRef}
            >
              <option value={order.menu.menuID}>{order.menu.menuItem}</option>
              {menu.map((item) => {
                return (
                  <option value={item.menuID} key={item.menuID}>
                    {item.menuItem}
                  </option>
                );
              })}
            </select>
          }
        </td>
      ) : (
        <td>{order.menu.menuItem}</td>
      )}
      {toggle ? (
        <td>
          <input name="notes" ref={notesRef} />
        </td>
      ) : (
        <td>{order.notes}</td>
      )}
      <td>
        {toggle ? (
          <>
            <i
              onClick={() => {
                setToggle(!toggle);
              }}
              className="material-symbols-outlined cancel"
            >
              cancel
            </i>
            <i
              onClick={handleUpdate}
              className="material-symbols-outlined done"
            >
              done
            </i>
          </>
        ) : (
          <>
            <i
              onClick={handleDelete}
              className="material-symbols-outlined trash"
            >
              delete_forever
            </i>
            <i
              onClick={() => {
                setToggle(!toggle);
              }}
              className="material-symbols-outlined edit"
              title="Edit order"
            >
              edit
            </i>
          </>
        )}

        <i onClick={updateStatus} className="material-symbols-outlined next">
          east
        </i>
      </td>
    </tr>
  );
};
