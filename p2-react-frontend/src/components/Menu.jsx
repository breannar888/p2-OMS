import React from 'react'

export const Menu = () => {
  return (
    <main className="container col-9 col-lg-10 p-3">
      <div className="container">
        <h1>Manage Menu</h1>
        <button className="btn manage-add">Add New Item</button>
      </div>
      <div className="row row-cols-3" id="here">
      </div>

    </main>
  )
}
