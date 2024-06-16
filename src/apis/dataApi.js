import React from "react";
import data from "../constants/mockData";

export async function getTableDataV1() {
  return new Promise((resolve, reject) => {
    console.log("Data", data);
    setTimeout(() => {
      // resolve(Math.random() * 100);
      resolve(data);
    }, 500);
  });
}
