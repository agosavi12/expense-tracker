import React, { useState } from 'react'
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesList from "./ExpensesList";

const Expenses = ({expenses}) => {
  const [filteredYear, setFilteredYear] = useState('2022')
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  }

  const filteredExpenses = expenses.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear
  });

  return (
    <Card className="expenses">
        <ExpenseFilter selected={filteredYear} onFilterChange={filterChangeHandler} />
        <ExpensesList items={filteredExpenses} />
    </Card>
  )
}

export default Expenses