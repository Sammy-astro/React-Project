import Header from "./components/header";
import Balance from "./components/Balance";
import { GlobalProvider } from "./context/GlobalState";
import IncomeExpense from "./components/IncomeExpense";
import TList from "./components/TList";
import AddT from "./components/AddT";
import "./App.css";
import React from "react";


function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container ">
        <Balance />
        <IncomeExpense />
        <TList />
        <AddT />
      </div>
    </GlobalProvider>
  );
}

export default App;
