import React, { useState, useRef, forwardRef } from "react";
import { OrderState } from "../context/OrderContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";


export const AddForm = () => {
  const { menu, ticket, updateValues, setUpdateValues } = OrderState();
  const navigate = useNavigate();
  const [ticketNew, setTicketNew] = useState(true);
  const menuID = useRef();
  const ticketID = useRef();
  const ticketName = useRef();
  const notes = useRef();

  const ticketChange = (event) => {
    event.target.value === "new" ? setTicketNew(true) : setTicketNew(false);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (ticketID.current.value === 'new') {
      // await axios.post("http://10.0.0.50:8080/ticket/", {
      await axios.post("http://localhost:8080/ticket/", {
        ticketName: ticketName.current.value
      })
        // .then (axios.post("http://10.0.0.50:8080/order/", {
        .then((res) => {
          axios.post("http://localhost:8080/order/", {
            menu: { menuID: menuID.current.value },
            ticket: { ticketID: res.data.ticketID },
            status: { statusID: 1 },
            notes: notes.current.value,
          })
        })
    } else {
      // await axios.post("http://10.0.0.50:8080/order/", {
      await axios.post("http://localhost:8080/order/", {
        menu: { menuID: menuID.current.value },
        ticket: { ticketID: ticketID.current.value },
        status: { statusID: 1 },
        notes: notes.current.value,
      })
    }
    setUpdateValues(!updateValues)
    navigate("../current");

  }

  return (
    <main className="container col-9 col-lg-10 p-3">
      <h1>Add Order</h1>
      <form onSubmit={handleSubmit}>
        <div className="row row-cols-1">
          <div className="row row-cols-2">
            <div className="form-group col-5">
              <label htmlFor="item">Menu Item</label>
              <select className="form-select" ref={menuID}>
                <option defaultValue="">&nbsp;</option>
                {menu.map((item) => (
                  <option value={item.menuID} key={item.menuID}>{item.menuItem}</option>
                ))}
              </select>
            </div>
            <div className="col-1"></div>
            <div className="form-group col-5">
              <label htmlFor="item">Tickets</label>
              <select className="form-select" ref={ticketID} onChange={ticketChange} >
                <option value="new" >(Add ticket)</option>
                {ticket.map((ticket) => {
                  return (
                    <option key={ticket.ticketID} value={ticket.ticketID}>{ticket.ticketName}</option>
                  )
                })}
              </select>
            </div>
          </div>
          {ticketNew ? <TicketName ref={ticketName} /> : <></>}
          <div className="form-group col-11">
            <label htmlFor="notes">Notes</label>
            <textarea
              name="notes"
              className="form-control"
              id="notes"
              cols="10"
              rows="5"
              ref={notes}
            ></textarea>
          </div>
        </div>
        <div className="row">
          <div className="form-group col-5">
            <div className="input-group">
              <span className="input-group-text">Total $</span>
              <input
                className="form-control"
                type="text"
                placeholder="0.00"
                disabled
              />
            </div>
          </div>
          <div className="col-4"></div>
          <button type="submit" className="btn col-2 p-0" id="submit">
            Submit
          </button>
        </div>
      </form>
    </main>
  );
};

const TicketName = forwardRef((props, ref) => (
  <div className="row">
    <div className="form-group col-11">
      <label htmlFor="notes">Ticket Name</label>
      <input className="form-control" ref={ref} {...props}></input>
    </div>
  </div>
));

