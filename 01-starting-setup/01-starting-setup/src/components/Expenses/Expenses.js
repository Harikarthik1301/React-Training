import React, { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpenseChart from "./ExpenseChart";

function Expenses(props) {
  const [year, setYear] = useState("2020");
  const yearchanger = (selectedyear) => {
    setYear(selectedyear);
  };

  const FilteredExpenses = props.items.filter(expenses=>{
    return expenses.date.getFullYear().toString()===year;
  })
  return (
    <Card className="expenses">
      <ExpensesFilter selectedyear={year} onchangeyear={yearchanger} />
      <ExpenseChart expenseschartVal={FilteredExpenses} />
      <ExpensesList items = {FilteredExpenses} />
    </Card>
  );
}
export default Expenses;
