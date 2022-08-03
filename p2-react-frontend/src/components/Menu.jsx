import React from 'react'

export const Menu = () => {
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
      <div className="row row-cols-3" id="items">
      </div>

    </main>
  )
}
