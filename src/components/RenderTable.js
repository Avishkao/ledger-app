import "../styles/table.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import data from "../constants/mockData";
import {
  getTableData,
  updateStoreWithTableData,
} from "../controller/dataController";
import { Table } from "antd";

function RenderTable() {
  const customerData = useSelector((state) => state.users.users);

  const [columns, SetColumns] = useState([]);

  console.log(customerData);
  console.log("customerData", customerData);
  const dispatch = useDispatch();

  const handleOnClick = async () => {
    let response = await getTableData();
    dispatch(updateStoreWithTableData(response));
  };

  const generateColumnsForTable = () => {
    const array = customerData.map((data) => Object.keys(data));
    const columns = [];
    const setOfKeys = Array.from(new Set(array.flat()));
    setOfKeys.map((item) =>
      columns.push({
        title: item,
        dataIndex: item,
        key: item,
      })
    );
    return columns;
  };
  console.log("columns", generateColumnsForTable);

  useEffect(() => {
    const genratedColumns = generateColumnsForTable(customerData);
    SetColumns(genratedColumns);
  }, [customerData]);

  return (
    <>
      <button onClick={handleOnClick}>Add new customer </button>
      <Table dataSource={customerData} columns={columns} />
    </>
  );
}

export default RenderTable;
