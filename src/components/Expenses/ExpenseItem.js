import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import Cards from '../UI/Cards'
import { useState } from 'react'
 

const ExpenseItem = (props) => {

    const [title,setTitle] = useState(props.title)
    const btnClickHandler = (event) => {
        setTitle("Updated!")
        console.log("btn clicked!")
    }    

    return(
        <Cards className="expense-item">
            <ExpenseDate date={props.date}></ExpenseDate>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">{props.amount}</div>
            </div>
            <button onClick={btnClickHandler}>Click Me</button>
        </Cards>
    )
}

export default ExpenseItem