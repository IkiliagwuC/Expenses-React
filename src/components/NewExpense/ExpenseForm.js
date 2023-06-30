import { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  //gather all values for all inputs and store them into an object we can use to add expense when the form is submitted;
  const [enteredTitle, setEnteredTitle] = useState(""); //state for old an new values of title
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const [enteredDate, setEnteredDate] = useState(""); //state for old and new values of Date object
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const [enteredAmount, setEnteredAmount] = useState("");
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  //you can use one state instead of multiple states
  //you can also combine the inputHandlers into one
  const submitHandler = (event) => {
    //prevent the page from sendign request and reloading
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData); //console.log(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={titleChangeHandler}
            value={enteredTitle}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={enteredAmount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
            value={enteredDate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
