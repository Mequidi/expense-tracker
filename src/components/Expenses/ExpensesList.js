import "./ExpensesList.css"
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {

    if(props.items.length === 0)
        return <h2 className="expenses-list__fallback">No Expenses Found</h2>
    else {
        return <ul className="expenses-list">
            {props.items.map(expense=>{
                return(<ExpenseItem
                    key = {expense.id}
                    title = {expense.title}
                    amount = {expense.amount}
                    date = {expense.date}
                ></ExpenseItem>)
            })}
        </ul>
    }
};

export default ExpensesList