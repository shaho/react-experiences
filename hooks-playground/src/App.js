import React from "react";
import "./App.css";
// import CounterOne from "./components/CounterOne";
import CounterTwo from "./components/CounterTwo";
// import ComponentC from "./components/ComponentC";

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

function App() {
  return (
    <div className="App">
      {/* <UserContext.Provider value={"Vishvas"}>
        <ChannelContext.Provider value={"Codevolution"}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider> */}

      {/* <CounterOne /> */}
      <CounterTwo />
    </div>
  );
}

export default App;
