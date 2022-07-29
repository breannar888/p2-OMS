import React from 'react'

export const OrdersLog = () => {
    return (
        <main className="container col-9 p-3">
            <h1>Orders Log</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Ticket ID</th>
                        <th scope="col">Ticket Name</th>
                        <th scope="col">Item</th>
                        <th scope="col">Notes</th>
                        <th scope="col">Status</th>
                        <th scope="col">Total</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>

                </tbody>
            </table>
        </main>
    )
}
