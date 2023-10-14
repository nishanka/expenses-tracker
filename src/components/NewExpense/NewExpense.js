import React, { useState } from "react";

import classes from "./NewExpense.module.css";
import ExpenseForm from "./ExpenseForm";
import ErrorModal from "../UI/ErrorModal";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [error, setError] = useState();

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  const invalidInput = { title: 'Invalid input', message: 'Please enter a valid title, amount and date.' };
  const invalidTitle = { title: 'Title is empty.', message: 'Please enter a valid title.' };
  const invalidAmount = { title: 'Amount is empty.', message: 'Please enter a valid amount.' };
  const invalidDate = { title: 'Date is empty.', message: 'Please enter a valid date.' };

  const saveExpenseDataHandler = (enteredExpenseData) => {
    if(enteredExpenseData.title.trim().length === 0 && enteredExpenseData.amount === 0 && enteredExpenseData.date.toString() === 'Invalid Date') {
      setError(invalidInput);
      return;
    }
    if(enteredExpenseData.title.trim().length === 0) {
      setError(invalidTitle);
      return;
    }

    if(enteredExpenseData.amount === 0) {
      setError(invalidAmount);
      return;
    }

    if(enteredExpenseData.date.toString() === 'Invalid Date') {
      setError(invalidDate);
      return;
    }

    const expensesData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    // Lifting the state up
    props.onAddExpense(expensesData);
  };

  const errorModalhandler = () => {
    setError(null);
  };

  return (
    <div className={classes['new-expense']}>
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorModalhandler} />}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
