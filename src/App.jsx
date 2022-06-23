import { createContext, useEffect, useReducer, useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import { AerolabContextData } from "./context";
import Home from "./pages/Home/Home";
import Layout from "./pages/Layout/Layout";
import { initialState, reducer } from "./reducer";
import { dataService } from "./services/data.service";

const URL_DATA_USER = "https://coding-challenge-api.aerolab.co/user/me";

const HEADERS_USER_DATA = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmFiNjBjOTUyMzQwMzAwMjE2YmQxYjciLCJpYXQiOjE2NTUzOTg2MDF9.Ad7f8yRQZITY5YNmg9JRyvXg8-Ogi252mOm_4XVykac`,
  },
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div className="App">
      <AerolabContextData.Provider value={{state, dispatch}}>
        <Layout>
          <Home />
        </Layout>
      </AerolabContextData.Provider>
    </div>
  );
}

export default App;
