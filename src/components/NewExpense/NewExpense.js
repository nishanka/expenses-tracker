import React from "react";

import classes from "./NewExpense.module.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = () => {
  return (
    <div className={classes.newExpense}>
      <ExpenseForm />
    </div>
  );
};

export default NewExpense;
