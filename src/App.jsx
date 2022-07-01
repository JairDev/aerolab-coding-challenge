import { useReducer } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { initialState, reducer } from "./reducer";
import { AerolabContextData } from "./context";
import Layout from "./pages/Layout/Layout";
import Home from "./pages/Home/Home";
import RedeemHistory from "./pages/RedeemHistory/RedeemHistory";
import "./App.css";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <AerolabContextData.Provider value={{ state, dispatch }}>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
          <Route
            path="redeem-history"
            element={
              <Layout>
                {" "}
                <RedeemHistory />
              </Layout>
            }
          />
        </Routes>
      </AerolabContextData.Provider>
    </div>
  );
}

export default App;
