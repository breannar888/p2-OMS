import React, { useState } from 'react'
import { useRef } from 'react';
import { OrderState } from "../context/OrderContext";
import axios from "axios";


export const Menu = () => {
  

  const { menu } = OrderState();
  // console.log(menu);
  return (
    <main className="container col-9 col-lg-10 p-3">
      <div className="container">
        <h1>Manage Menu</h1>
      </div>
      <div className="row">
        <button className="btn manage-add col-3">Add New Item</button>
        <form className="col-8">
          <input className="form-control" placeholder='Search Items' />
        </form>
      </div>
      <div className="row row-cols-4" >
        {menu.map((item) => (
            <div className="col m-2" key={item.menuID} >
              <div className="card">
                <img src={`../images/${item.imagePath}.jpg`} className="card-img-top" alt={item.menuItem} />
                <div className="card-body">
                  <CardInfo item={item} />
                </div>
              </div>
            </div>

        ))}
      </div >

    </main >
  )
}

/* 
const TicketInput = (props => (
  <>
    <option value="" className="placeholder"></option>
    {props.data.map((item) => (
      <option value={item.ticketID} key={item.ticketID}>{item.ticketID}: {item.ticketName}</option>
    ))}
  </>
)
);
*/

const CardInfo = (data => {

  const [toggle, setToggle] = useState(false);
  const { updateValues, setUpdateValues } = OrderState();
  const itemRef = useRef();
  const priceRef = useRef();
  // console.log(data.item); 
  // console.log(toggle);

  const handleUpdate = async () => {
    const menuItemInput = itemRef.current.value === "" ? data.item.menuItem: itemRef.current.value
    const priceInput = priceRef.current.value === "" ? data.item.price: priceRef.current.value
    try {
      axios
        .put(`http://localhost:8080/menu/${data.item.menuID}`, {
          menuItem: menuItemInput,
          price: priceInput,
          imagePath: data.item.imagePath,
          
        })
        .then((res) => {
          if (res.status === 200) {
            setUpdateValues(!updateValues);
            setToggle(!toggle)
          }
        });
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async () => {

    try {
      axios
        .delete(`http://localhost:8080/order/menu/${data.item.menuID}`)
        // .delete(`http://localhost:8080/menu/${data.item.menuID}`)
        .then((res) => {
          if (res.status === 204) {
            setUpdateValues(!updateValues);
            setToggle(!toggle)
          }
        });
    } catch (err) {
      console.log(err);
    }
  };
  /* "menuItem": "Asiago Chicken Pasta",
        "price": 12.99, */

  return toggle ? (
    <> 
      <input placeholder={data.item.menuItem} ref={itemRef} className="form-control" />
      <div className="m-2" />
      <input placeholder={data.item.price} ref={priceRef} className="form-control" />
      <i  onClick={handleUpdate}
          className="material-symbols-outlined next"
          title="Save item"> done 
      </i>
      <i  onClick={handleDelete}
          className="material-symbols-outlined trash"
          title="Delete item"> delete 
      </i>
    </>
  ) : (
    <> 
      <h5 className="card-title">{data.item.menuItem}</h5>
      <p className="card-text">${data.item.price}</p>
      <i  onClick={() => setToggle(!toggle)}
          className="material-symbols-outlined edit"
          title="Edit item"> edit 
      </i>
    </>
  )
  
} )