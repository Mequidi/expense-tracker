import ExpenseItem from "./ExpenseItem"
import "./Expenses.css"
import Cards from "../UI/Cards"

const Expenses = (props) =>{
    return(
    <Cards className="expenses"> 
        <ExpenseItem
            title = {props.items[0].title}
            amount = {props.items[0].amount}
            date = {props.items[0].date}
        ></ExpenseItem>
        <ExpenseItem
            title = {props.items[1].title}
            amount = {props.items[1].amount}
            date = {props.items[1].date}
        ></ExpenseItem>
        <ExpenseItem
            title = {props.items[2].title}
            amount = {props.items[2].amount}
            date = {props.items[2].date}
        ></ExpenseItem>
        <ExpenseItem
            title = {props.items[3].title}
            amount = {props.items[3].amount}
            date = {props.items[3].date}
        ></ExpenseItem>
    </Cards>)
}

export default Expenses