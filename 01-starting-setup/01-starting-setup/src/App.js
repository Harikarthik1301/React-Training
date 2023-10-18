import React,{useState} from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpenses from "./components/NewExpenses/NewExpenses";

const dummy_expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2021, 10, 17),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2022, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2023, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk",
    amount: 450,
    date: new Date(2023, 5, 12),
  },
  {
    id: "e5",
    title: "Bike",
    amount: 45000,
    date: new Date(2022, 7, 13),
  },
  {
    id: "e5",
    title: "Iphone",
    amount: 60000,
    date: new Date(2023, 9, 13),
  },
  {
    id: "e4",
    title: "Air Conditioner",
    amount: 450,
    date: new Date(2021, 4, 12),
  },
];
function App() {
  const [expenses, setExpenses]=useState(dummy_expenses);

  const addExpenseDataHandler =(expenseData)=>{
    setExpenses((prevExpenses)=>{
      return[ ...prevExpenses,expenseData]
    });
  };
  return (
    <div>
      <NewExpenses onAddExpenseData={addExpenseDataHandler}/>
       <Expenses items = {expenses} />
    </div>
  );
}

export default App;
