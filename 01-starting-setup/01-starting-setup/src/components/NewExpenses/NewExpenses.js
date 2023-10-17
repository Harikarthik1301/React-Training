import React from "react";
import './NewExpenses.css';
import ExpensesForm from "./ExpensesForm";
const NewExpenses = (props)=>{

    const saveExpenseDataHandler =(enteredExpenseData)=>{
 const expenseData={
    ...enteredExpenseData,
    id:Math.random().toString()
    };
    props.onAddExpenseData(expenseData)
};

    return(
        <div className="new-expense">
        <ExpensesForm onsaveExpenseDate={saveExpenseDataHandler}/>
        </div>
    );
}

export default NewExpenses