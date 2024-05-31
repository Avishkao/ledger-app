import React from "react";
import data from "../constants/mockData";
import { useEffect, useState } from "react";
import MockDataController from "../../controllers/mockDataController";

function MockApi() {
  const [newData, setNewData] = useState([]);
  const fetchMockedData = () =>
    new Promise((resolve, reject) => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {
          if (response) {
            resolve(data);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  useEffect(() => {
    fetchMockedData().then((data) => {
      return setNewData(data);
    });
  }, []);

  return <MockDataController initialState={newData} />;
}

export default MockApi;
