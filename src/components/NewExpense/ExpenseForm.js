import React, { useState } from "react";

import classes from "./ExpenseForm.module.css";
import Button from "../UI/Button";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  //   const [userInput, setUserInput] = useState({
  //     enteredTitle: "",
  //     enteredAmount: "",
  //     enteredDate: "",
  //   });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // console.log(event.target.value);
    /* When updating the state depending on the previous state, 
    this way may cause issues when scheduling. 
    Therefore use alternative way of the state updating function added below. */
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });

    /* Best way is to Passing a function to that state update function. 
    And it will receive the previous state snapshot for that state updating function. 
    This way react guarantee that the state snapshot it gives here(e.g. prevState) 
    is always be the latest snapshot, by keeping all shduled snapshot updates in mind. */
    // setUserInput((prevState) => {
    //   /* Return the new state */
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // console.log(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredAmount: event.target.value };
    // }); 
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // console.log(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredDate: event.target.value };
    // });
  };

  /*
  const inputChangeHandler = (identifire, value) => {
    if (identifire === "title") {
      setEnteredTitle(value);
    } else if (identifire === "date") {
      setEnteredDate(value);
    } else setEnteredAmount(value);
  };*/

  const submitHandler = (event) => {
    event.preventDefault();

    const expensesData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    // Lifting the state up
    props.onSaveExpenseData(expensesData);

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={classes['new-expense__controls']}>
        <div className={classes['new-expense__control']}>
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className={classes['new-expense__control']}>
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className={classes['new-expense__control']}>
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2030-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className={classes['new-expense__actions']}>
        <Button type='button' onClick={props.onCancel}>Cancel</Button>
        <Button type='submit'>Add Expense</Button>
      </div>
    </form>
  );
};

export default ExpenseForm;
