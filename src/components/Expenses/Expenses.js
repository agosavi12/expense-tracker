import React, { useState } from 'react'
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import Card from '../UI/Card';
import ExpenseItem from "./ExpenseItem";
import './Expenses.css';

const Expenses = ({expenses}) => {
  const [filteredYear, setFilteredYear] = useState('2022')
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  }
  return (
    <Card className="expenses">
        <ExpenseFilter selected={filteredYear} onFilterChange={filterChangeHandler} />
        <ExpenseItem title={expenses[0].title} price={expenses[0].amount} date={expenses[0].date} />
        <ExpenseItem title={expenses[0].title} price={expenses[0].amount} date={expenses[0].date} />
        <ExpenseItem title={expenses[0].title} price={expenses[0].amount} date={expenses[0].date} />
        <ExpenseItem title={expenses[0].title} price={expenses[0].amount} date={expenses[0].date} />
    </Card>
  )
}

export default Expenses