import React ,{useState} from "react";
import './ExpensesForm.css'
const ExpensesForm = (props) =>{
 const [enteredTitle,setEnteredTitle] =useState('');
 const [enteredAmount,setEnteredAmount] =useState('');
 const [enteredDate,setEnteredDate] =useState('');
    const titlechanger = (event) =>{
        setEnteredTitle(event.target.value);
    }
    const amountchanger = (event) =>{
        setEnteredAmount(event.target.value);
    }
    const datechanger = (event) =>{
        setEnteredDate(event.target.value);
    }
    const submitHandler = (event) =>{
        event.preventDefault();
        const expensedata= {
            title: enteredTitle,
            amount:enteredAmount,
            date:new Date(enteredDate)    
        }
        props.onsaveExpenseDate(expensedata);
        setEnteredTitle('')
        setEnteredAmount('')
        setEnteredDate('')
    }
    return(
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titlechanger}></input>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" value={enteredAmount}  min="0.01" step="0.01" onChange={amountchanger}></input>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" value={enteredDate}  min="2022-01-01" max="2024-12-31" onChange={datechanger}></input>
                </div>
            </div>
            <div className="new-expense__actions">
            <button type="button" onClick={props.oncancel}>Cancel</button>
                <button type="submit">Add Expenses</button>
            </div>
        </form>
    );
}
export default ExpensesForm;