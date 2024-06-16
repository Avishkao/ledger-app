import { useDispatch } from "react-redux";
import { getTableDataV1 } from "../apis/dataApi";
import { addNewCustomer, userReducer } from "../redux/userReducer";

export const getTableData = async () => {
  const response = await getTableDataV1();
  console.log("Response", response);
  return response;
};

export const updateStoreWithTableData = (response) => {
  return (dispatch) => {
    dispatch({
      type: "ADD_USER",
      payload: response,
    });
  };
};
