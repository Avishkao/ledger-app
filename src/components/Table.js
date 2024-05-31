import "../styles/table.css";
import { useDispatch, useSelector } from "react-redux";
import { addNewCustomer } from "../controllers/mockDataController";

function Table() {
  const newData = useSelector((state) => state.mockData.value);
  console.log("newData", newData);
  const dispatch = useDispatch();
  return (
    <table border={1}>
      <button onClick={() => dispatch(addNewCustomer())}>
        Add New Customer
      </button>
      <tr>
        <th>Number</th>
        <th>Customer Name</th>
        <th>Amount</th>
        <th>Date</th>
      </tr>
      {newData.map((item) => (
        <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.customer_name}</td>
          <td>{item.amount}</td>
          <td>{item.date}</td>
        </tr>
      ))}
    </table>
  );
}

export default Table;
