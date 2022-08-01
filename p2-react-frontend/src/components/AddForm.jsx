import React from "react";
import { OrderState } from "../context/OrderContext";

export const AddForm = () => {
  const { menu } = OrderState();

  return (
    <main className="container col-9 col-lg-10 p-3">
      <h1>Add Order</h1>
      <form>
        <div className="row row-cols-1">
          <div className="form-group col-11">
            <label htmlFor="item">Menu Item</label>
            <select className="form-select" id="item">
              <option defaultValue="">&nbsp;</option>
              {menu.map((item) => (
                <option value={item.menuItem} key={item.menuID}>{item.menuItem}</option>
              ))}
            </select>
          </div>
          {ticketNew ? <TicketName /> : <></> }
          <div className="form-group col-11">
            <label htmlFor="notes">Notes</label>
            <textarea
              name="notes"
              className="form-control"
              id="notes"
              cols="10"
              rows="5"
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

const TicketName = () => (
  <div className="row">
    <div className="form-group col-11">
      <label htmlFor="notes">Ticket Name</label>
      <input className="form-control"></input>
    </div>
  </div>
)