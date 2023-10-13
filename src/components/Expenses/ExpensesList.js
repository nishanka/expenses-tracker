import React from "react";

import classes from "./ExpensesList.module.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  const filteredExpenses = props.items;

  if (filteredExpenses.length === 0) {
    return <h2 className={classes['expenses-list__fallback']}>Found no expenses.</h2>;
  }

  return (
    <ul className={classes['expenses-list']}>
      {filteredExpenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
