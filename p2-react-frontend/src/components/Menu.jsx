import React from 'react'
import { OrderState } from "../context/OrderContext";

export const Menu = () => {

  const { menu } = OrderState();
  console.log(menu);
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
          <>
            <div class="col m-2">
              <div class="card">
                <img src={`../images/${item.imagePath}.jpg`} class="card-img-top" alt={item.menuItem} />
                  <div class="card-body">
                    <h5 class="card-title">{item.menuItem}</h5>
                    <p class="card-text">${item.price}</p>
                    <button class="btn btn-sm manage-edit">Edit</button>
                  </div>
              </div>
            </div>
          </>
        ))}
      </div>

    </main>
  )
}
/* 
<div class="col m-2">
  <div class="card">
    <img src="../images/${images[i]}.jpg" class="card-img-top" alt="${items[i]}">
    <div class="card-body">
      <h5 class="card-title">${items[i]}</h5>
      <p class="card-text">${prices[i]}</p>
      <button class="btn btn-sm manage-edit">Edit</button>
    </div>
  </div>
</div>


{menuID: 1, menuItem: "Asiago Chicken Pasta", price: 12.99, imagePath: "/chicken_pasta"}
*/