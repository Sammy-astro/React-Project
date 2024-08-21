import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
import Transaction from "./Transaction";

const TList = () => {
  const { transaction } = useContext(GlobalContext);

  useEffect(() => {
    console.log(transaction); // Should now correctly log your transactions
  }, [transaction]);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transaction.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </>
  );
};

export default TList;
