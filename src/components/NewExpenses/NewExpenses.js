import './NewExpenses.css'
import ExpenseForm from './ExpenseForm'

const  NewExpenses = (props) => {

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const ExpenseData = {
            ...enteredExpenseData,
            id: new Date().getTime()
        }
        console.log("from NewExpenses : ")
        console.log(ExpenseData)
        props.onAddExpense(ExpenseData);
        
    }

    return (<div className="new-expense">
        <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler}></ExpenseForm>
    </div>)
}

export default NewExpenses