export const AddOrder = () => {
    return (
        <main class="container col-9">
        <h1>Add Order</h1>
        <form>
            <div className="row row-cols-1">
                <div className="form-group col-11">
                    <label for="item">Menu Item</label>
                    <select className="form-select" id="item">
                        <option selected>&nbsp;</option>
                        <option value="1">Asiago Chicken Pasta</option>
                        <option value="2">Argentinian-Style Steak</option>
                        <option value="3">All-American Burger</option>
                        <option value="4">Shrimp Scampi</option>
                        <option value="5">Chicken Fajitas</option>
                        <option value="6">Grilled Salmon</option>
                    </select>
                </div>
                <div className="form-group col-11">
                    <label for="notes">Notes</label>
                    <textarea name="notes" className="form-control" id="notes" cols="10" rows="5"></textarea>
                </div>
            </div>
            <div className="row">
                <div className="form-group col-5">
                    <div className="input-group">
                        <span className="input-group-text">Total $</span>
                        <input className="form-control" type="text" placeholder="0.00" disabled/>
                    </div>
                </div>
                <div className="col-4"></div>
                <button type="submit" className="btn col-2 p-0" id="submit">Submit</button>
            </div>
        </form>
        </main>

    )
}