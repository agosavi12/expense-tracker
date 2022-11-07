import React, { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = ({onSaveExpenseData}) => {
const [enteredTitle, setEnteredTitle] = useState('');
const [enteredAmount, setEnteredAmount] = useState('');
const [enteredDate, setEnteredDate] = useState('');

const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value)
}

const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value)
}

const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value)
}

const submitHandler = (e) => {
    e.preventDefault();

    const expenseData = {
        title: enteredTitle,
        amount: enteredAmount,
        date: new Date(enteredDate)
    }

    onSaveExpenseData(expenseData)
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
}

  return (
    <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
            </div>
            <div className="new-expense__control">
                <label>Price</label>
                <input type="number" min="1" step="1" value={enteredAmount} onChange={amountChangeHandler} />
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" min="2020-01-01" max="2022-12-31" value={enteredDate} onChange={dateChangeHandler} />
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit">ADD Expense</button>
        </div>
    </form>
  )
}

export default ExpenseForm