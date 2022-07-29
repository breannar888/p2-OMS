import React from 'react'

export const OrdersTable = () => {
    return (
        <main className="container col-9 col-lg-10 p-3">
            <h1>Current Orders</h1>
            <div className="row container">
                <div className="col ">
                    <h2>New Orders</h2>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Ticket</th>
                                <th scope="col">Item</th>
                                <th scope="col">Notes</th>
                                <th scope="col">Edit</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">2</th>
                                <td>Steak</td>
                                <td>Well Done</td>
                                <td>
                                    <i className="material-symbols-outlined trash">delete_forever</i>
                                    <i className="material-symbols-outlined next">east</i>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Eggs</td>
                                <td>Sunny Side</td>
                                <td>
                                    <i className="material-symbols-outlined trash">delete_forever</i>
                                    <i className="material-symbols-outlined next">east</i>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">4</th>
                                <td>Ham</td>
                                <td></td>
                                <td>
                                    <i className="material-symbols-outlined trash">delete_forever</i>
                                    <i className="material-symbols-outlined next">east</i>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">4</th>
                                <td>Eggs</td>
                                <td></td>
                                <td>
                                    <i className="material-symbols-outlined trash">delete_forever</i>
                                    <i className="material-symbols-outlined next">east</i>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="col ">
                    <h2>Cooking</h2>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Ticket</th>
                                <th scope="col">Item</th>
                                <th scope="col">Notes</th>
                                <th scope="col">Edit</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">2</th>
                                <td>Pizza</td>
                                <td>Extra Cheese</td>
                                <td>
                                    <i className="material-symbols-outlined trash">delete_forever</i>
                                    <i className="material-symbols-outlined next">east</i>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="col ">
                    <h2>Ready</h2>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Ticket</th>
                                <th scope="col">Item</th>
                                <th scope="col">Notes</th>
                                <th scope="col">Edit</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Pizza</td>
                                <td></td>
                                <td>
                                    <i className="material-symbols-outlined trash">delete_forever</i>
                                    <i className="material-symbols-outlined next">east</i>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">1</th>
                                <td>Burger</td>
                                <td>Well Done</td>
                                <td>
                                    <i className="material-symbols-outlined trash">delete_forever</i>
                                    <i className="material-symbols-outlined next">east</i>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    )
}
