import React, { useState, useRef, forwardRef, useEffect } from "react";
import { OrderState } from "../context/OrderContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { ErrorMessage } from "./ErrorMessage";

export const AddForm = () => {
  const { menu, ticket, updateValues, setUpdateValues, ticketSum } = OrderState();
  const navigate = useNavigate();
  const [ticketNew, setTicketNew] = useState(true)
  const [itemPrice, setItemPrice] = useState(0);
  const [ticketPrice, setTicketPrice] = useState(0);
  const addOrderSchema = Yup.object().shape({
    menuID: Yup.number().typeError('Menu Item is required').required(),
    ticketName: Yup.string().max(
      35,
      "Too long! Must be shorter than 35 characters"
    ),
    notes: Yup.string().max(65, "Too long! Must be shorter than 65 characters"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(addOrderSchema),
  });
  const price = useRef();

  const ticketChange = (event) => {
    if (event.target.value === "new") {
      setTicketNew(true); setTicketPrice(0)
    } else {
      setTicketNew(false); setTicketPrice(ticketSum[event.target.value - 1]);
    };


  }

  const itemChange = (event) => {
    const menuID = (event.target.value * 1)
    const menuItem = menu.find(x => x.menuID === menuID)?.price ?? 0.00;
    setItemPrice(menuItem)
    // console.log(itemPrice);

  }

  useEffect(() => {

    let totalPrice = itemPrice + ticketPrice
    price.current.value = totalPrice.toFixed(2);
  }, [itemPrice, ticketPrice])


  const onSubmit = async (data) => {
    let menuIDValue = data.menuID;
    let ticketIDValue = data.ticketID;
    let notesValue = data.notes;

    if (ticketIDValue === "new") {
      // await axios.post("http://10.0.0.50:8080/ticket/", {
      await axios
        .post("http://localhost:8080/ticket/", {
          ticketName: data.ticketName,
        })
        .then((res) => (ticketIDValue = res.data.ticketID));
    }

    await axios
      .post("http://localhost:8080/order/", {
        menu: { menuID: menuIDValue },
        ticket: { ticketID: ticketIDValue },
        status: { statusID: 1 },
        notes: notesValue,
      })
      .then((res) => console.log(res.data));
    setUpdateValues(!updateValues);
    navigate("../current");
  };

  return (
    <main className="container col-9 col-lg-10 p-3">
      <h1>Add Order</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row row-cols-1">
          <div className="row row-cols-2">
            <div className="form-group col-5">
              <label htmlFor="item">Menu Item</label>
              <select className="form-select" {...register("menuID")} onChange={itemChange}>
                <option defaultValue="">&nbsp;</option>
                {menu.map((item) => (
                  <option value={item.menuID} key={item.menuID}>
                    {item.menuItem}
                  </option>
                ))}
              </select>
              <ErrorMessage>{errors.menuID?.message}</ErrorMessage>
            </div>
            <div className="col-1"></div>
            <div className="form-group col-5">
              <label htmlFor="item">Tickets</label>
              <select
                className="form-select"
                {...register("ticketID")}
                onChange={ticketChange}
              >
                <option value="new">(Add ticket)</option>
                {ticket.map((ticket) => (
                  <option key={ticket.ticketID} value={ticket.ticketID}>
                    {ticket.ticketName}
                  </option>
                ))}
              </select>
            </div>
          </div>
          {ticketNew ? (
            <div>
              <TicketName {...register("ticketName")} />
              <ErrorMessage>{errors.ticketName?.message}</ErrorMessage>
            </div>
          ) : (
            <></>
          )}
          <div className="form-group col-11">
            <label htmlFor="notes">Notes</label>
            <textarea
              name="notes"
              className="form-control"
              id="notes"
              cols="10"
              rows="5"
              {...register("notes")}
            ></textarea>
            <ErrorMessage>{errors.notes?.message}</ErrorMessage>
          </div>
        </div>
        <div className="row">
          <div className="form-group col-5">
            <div className="input-group">
              <span className="input-group-text">Total $</span>
              <input
                className="form-control"
                placeholder="0.00"
                ref={price}
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
