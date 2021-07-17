import { useState } from 'react';
import { isCompositeComponent } from 'react-dom/test-utils';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpenses from './components/NewExpenses/NewExpenses';

const dummyData = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desks (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];


function App() {

  const [expense,setExpense] = useState(dummyData);

  const addExpenseHandler = (expenseDataApp) => {
    console.log("from app.js : ")
    console.log(expenseDataApp);
    setExpense((prevExpense)=>([expenseDataApp,...prevExpense]))
  }

  console.log(expense)
  return (
    <div>
      <NewExpenses onAddExpense = {addExpenseHandler}></NewExpenses>
      <Expenses items = {expense}></Expenses>
    </div>
  );
}

export default App;
