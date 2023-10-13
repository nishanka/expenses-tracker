import React from "react";

import classes from "./ExpenseDate.module.css";

const ExpenseDate = (props) => {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className={classes.expenseDate}>
      <div className={classes.expenseDateMonth}>{month}</div>
      <div className={classes.expenseDateYear}>{year}</div>
      <div className={classes.expenseDateDay}>{day}</div>
    </div>
  );
};

export default ExpenseDate;
