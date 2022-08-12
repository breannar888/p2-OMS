import React, { useRef, useState, useEffect } from "react";
import { OrderState } from "../context/OrderContext";
import axios from "axios";

export const OrdersLog = () => {
  const {
    order,
    menu,
    ticket,
    pagedOrder,
    setPagedOrder,
    updateValues,
    setUpdateValues,
  } = OrderState();
  const [results, setResults] = useState(order);
  const [filterType, setFilterType] = useState("ticketID");
  let searchQuery = "";

  const [currPage, setCurrPage] = useState(0);
  const searchBox = useRef();
  const filterBox = useRef();

  useEffect(() => {
    setResults(pagedOrder);
  }, [pagedOrder]);

  const placeholder = (event) => {
    setFilterType(event.target.value);
    setResults(pagedOrder);
  };

  const searchResult = (event) => {
    searchQuery = event.target.value;
    let filter = filterBox.current.value;
    let searchValue;

    if (searchQuery === "") {
      pagedOrder.map((oneOrder) => {
        return oneOrder;
      });
      setResults(pagedOrder);
    } else {
      const currentResults = order.filter((oneOrder) => {
        switch (filter) {
          case "ticketID":
            searchValue = oneOrder.ticket.ticketID;
            break;
          case "item":
            searchValue = oneOrder.menu.menuID;
            break;
          case "status":
            searchValue = oneOrder.status.statusID;
            break;
          default:
            searchValue = "";
            break;
        }
        return searchValue.toString().toLowerCase().includes(searchQuery);
      });
      setResults(currentResults);
    }
  };

  const updatePage = (page) => {
    setCurrPage(page);
    axios.get(`http://localhost:8080/order/log?page=${page}`).then((resp) => {
      setPagedOrder(resp.data);
    });
  };

  const handleDelete = async (id) => {
    console.log(id);
    try {
      axios
        .delete(`http://localhost:8080/order/${id}`)
        .then((res) => {
          if (res.status === 204) {
            setUpdateValues(!updateValues);
          }
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
<>
      <h1>Orders Log</h1>
      <form className="row m-3">
        <div className="col-1 align-self-center" id="searchLabel">
          Search
        </div>
        <div className="col-7">
          <select
            className="form-select"
            ref={searchBox}
            onChange={searchResult}
          >
            {
              {
                ticketID: <TicketInput data={ticket} />,
                item: <ItemInput data={menu} />,
                status: <StatusInput />,
              }[filterType]
            }
          </select>
        </div>
        <div className="col-4">
          <select
            className="form-select col-5"
            ref={filterBox}
            onChange={placeholder}
          >
            <option value="ticketID">Ticket</option>
            <option value="item">Item</option>
            <option value="status">Status</option>
          </select>
        </div>
      </form>
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
          {results.map((order, i) => (
            <tr key={i}>
              <td>{order.ticket.ticketID}</td>
              <td>{order.ticket.ticketName}</td>
              <td>{order.menu.menuItem}</td>
              <td>{order.notes}</td>
              <td>{order.status.statusCode}</td>
              <td>{order.menu.price}</td>
              <td>
                <i
                  className="material-symbols-outlined trash"
                  onClick={() => {
                    handleDelete(order.orderID);
                  }}
                >
                  delete_forever
                </i>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <nav aria-label="Page navigation">
        <ul className="pagination">
          <li className="page-item">
            <button
              className={currPage <= 0 ? "page-link disabled" : "page-link"}
              onClick={() => {
                updatePage(currPage - 1);
              }}
            >
              Previous
            </button>
          </li>
          {[...Array(5)].map((x, i) => {
            return (
              <li className="page-item" key={i}>
                <button
                  className={i === currPage ? "page-link active" : "page-link"}
                  onClick={() => {
                    updatePage(i);
                  }}
                >
                  {i + 1}
                </button>
              </li>
            );
          })}
          <li className="page-item">
            <button
              className={currPage >= 4 ? "page-link disabled" : "page-link"}
              onClick={() => {
                updatePage(currPage + 1);
              }}
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
</>
  );
};

const TicketInput = (props) => (
  <>
    <option value="" className="placeholder"></option>
    {props.data.map((item) => (
      <option value={item.ticketID} key={item.ticketID}>
        {item.ticketID}: {item.ticketName}
      </option>
    ))}
  </>
);
const ItemInput = (props) => (
  <>
    <option value="" className="placeholder"></option>
    {props.data.map((item) => (
      <option value={item.menuID} key={item.menuID}>
        {item.menuItem}
      </option>
    ))}
  </>
);

const StatusInput = () => (
  <>
    <option value="" className="placeholder"></option>
    <option value="1">New Orders</option>
    <option value="2">Cooking</option>
    <option value="3">Ready</option>
    <option value="4">Served</option>
  </>
);
