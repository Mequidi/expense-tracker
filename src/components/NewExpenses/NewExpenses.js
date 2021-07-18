import './NewExpenses.css'
import ExpenseForm from './ExpenseForm'
import { useState } from 'react'

const  NewExpenses = (props) => {

    const [isEditing,setIsEditing] = useState(false)

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const ExpenseData = {
            id: new Date().getTime(),
            ...enteredExpenseData
        }
        props.onAddExpense(ExpenseData);
    }
    const startEditHandler = () => {
        setIsEditing(true);
    }
    const stopEditHandler = () => {
        setIsEditing(false);
    }

    return (<div className="new-expense">
        {/* <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler}></ExpenseForm> */}
        {!isEditing&&(<button onClick = {startEditHandler}>Add New Expense</button>)}
        {isEditing&&(<ExpenseForm
            onSaveExpenseData = {saveExpenseDataHandler}
            onCancel = {stopEditHandler}>
        </ExpenseForm>)}
    </div>)
}

export default NewExpenses