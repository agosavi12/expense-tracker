import React, { useState } from 'react'
import ExpenseForm from "./ExpenseForm"
import './NewExpense.css'

const NewExpense = ({onAddExpense}) => {
  const [isAdding, setIsAdding] = useState(false);

  const saveExpenseData = (expenseData) => {
    const expense = {
      ...expenseData,
      Id: Math.random().toString()
    };

    onAddExpense(expense);
  };

  const addExpenseHandler = () => {
    setIsAdding(true)
  }

  const closeAdding = () => {
    setIsAdding(false)
  }


  return (
    <div className="new-expense">
        {!isAdding && <button onClick={addExpenseHandler}>Add New Expense</button>}
        {isAdding && <ExpenseForm onSaveExpenseData={saveExpenseData} onClose={closeAdding} />}
    </div>
  )
}

export default NewExpense