import React, { useState } from 'react'
import { useRef } from 'react';
import { OrderState } from "../context/OrderContext";

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

const CardInfo = (item => {

  const [toggle, setToggle] = useState(false);
  const itemRef = useRef();
  const priceRef = useRef();

  toggle ? (
    <>
      <input placeholder={item.menuItem} ref={itemRef} className="form-control" />
      <br />
      <input placeholder={item.price} ref={priceRef} className="form-control" />
      <i  onClick={() => setToggle(!toggle)}
          className="material-symbols-outlined"
          title="Save order"> done 
      </i>
    </>
  ) : (
    <>
      <h5 className="card-title">{item.menuItem}</h5>
      <p className="card-text">${item.price}</p>
      <i  onClick={() => setToggle(!toggle)}
          className="material-symbols-outlined"
          title="Edit order"> edit 
      </i>
    </>
  )
  
} )