import React from "react";

import classes from "./ExpenseItem.module.css";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  return (
    <Card className={classes.expenseItem}>
      <ExpenseDate date={props.date} />
      <div className={classes.expenseItemDescription}>
        <h2>{props.title}</h2>
        <div className={classes.expenseItemPrice}>$ {props.amount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
