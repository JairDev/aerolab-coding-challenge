import { useState } from "react";
import "./App.css";
import Home from "./pages/Home/Home";
import Layout from "./pages/Layout/Layout";

function App() {
  return (
    <div className="App">
      <Layout>
        <Home />
      </Layout>
    </div>
  );
}

export default App;
