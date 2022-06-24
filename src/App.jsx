import { useReducer } from "react";
import "./App.css";
import { AerolabContextData } from "./context";
import Home from "./pages/Home/Home";
import Layout from "./pages/Layout/Layout";
import { initialState, reducer } from "./reducer";

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
