import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  value: [
    {
      id: 1,
      customer_name: "Myntra",
      amount: 1200,
      date: "2021-05-02",
    },
    {
      id: 2,
      customer_name: "Ajio",
      amount: 7800,
      date: "2021-04-01",
    },
    {
      id: 3,
      customer_name: "Flipkart",
      amount: 2673,
      date: "2021-01-01",
    },
  ],
};

const shoppingApps = [
  "Amazon",
  "eBay",
  "Walmart",
  "Target",
  "Alibaba",
  "Etsy",
  "Best Buy",
  "ASOS",
  "Zara",
  "Flipkart",
  "Macy's",
  "Lazada",
  "Taobao",
  "Rakuten",
  "Overstock",
  "Sephora",
  "Wayfair",
  "AliExpress",
  "Newegg",
  "H&M",
];

const mockDataSlice = createSlice({
  name: "mockData",
  initialState,
  reducers: {
    addNewCustomer: (state) => {
      console.log("state", state.value);
      const newCustomer = {
        id: state.value.length + 1,
        customer_name:
          shoppingApps[Math.floor(Math.random() * shoppingApps.length)],
        amount: Math.floor(Math.random() * 10000),
        date: "2021-01-05",
      };
      state.value = [...state.value, newCustomer];
    },
  },
});

export const { addNewCustomer } = mockDataSlice.actions;

export default mockDataSlice.reducer;
