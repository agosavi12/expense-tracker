import React from 'react'
import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css';

const ExpensesList = ({items}) => {
  return (
    <ul className="expenses-list">
        {items.length === 0 && <p className="expenses-list__fallback">No Expenses Found!</p>}
        {
            items.length > 0 && items.map(expense => (
            <ExpenseItem key={expense.id} title={expense.title} price={expense.amount} date={expense.date} />
          ))
        }
    </ul>
  )
}

export default ExpensesList