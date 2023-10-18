import React ,{useState} from 'react';
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import "./ExpensesList.css"

function ExpenseItem(props) {

  const [title,setTitle] = useState(props.title) ;
  const clickHandler = () =>{
    setTitle("Updated!")
  }
  return (
    <li className='expenses-list__fallback '>
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
        <button onClick={clickHandler}>Change Title</button>
      </div>
    </Card>
    </li>
  );
}

export default ExpenseItem;
