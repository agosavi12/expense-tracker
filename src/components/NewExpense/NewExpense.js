import React from 'react'
import ExpenseForm from "./ExpenseForm"
import './NewExpense.css'

const NewExpense = ({onAddExpense}) => {

  const saveExpenseData = (expenseData) => {
    const expense = {
      ...expenseData,
      Id: Math.random().toString()
    };

    onAddExpense(expense);
  };


  return (
    <div className="new-expense">
        <ExpenseForm onSaveExpenseData={saveExpenseData}  />
    </div>
  )
}

export default NewExpense