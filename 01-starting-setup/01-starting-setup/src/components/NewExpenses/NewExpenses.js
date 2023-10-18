import React ,{useState} from "react";
import './NewExpenses.css';
import ExpensesForm from "./ExpensesForm";
const NewExpenses = (props)=>{

    const [isadding,setIsadding ]=useState(false)

    const saveExpenseDataHandler =(enteredExpenseData)=>{
 const expenseData={
    ...enteredExpenseData,
    id:Math.random().toString()
    };
    props.onAddExpenseData(expenseData);
    setIsadding(false);
};

const addHandler =()=>{
    setIsadding(true);
}
const stopaddHandler =()=>{
    setIsadding(false);
}
    return(
        <div className="new-expense">
            {!isadding && <button onClick={addHandler}>Add Expenses</button>}
        {isadding && <ExpensesForm onsaveExpenseDate={saveExpenseDataHandler} oncancel={stopaddHandler}/>}
        </div>
    );
}

export default NewExpenses