import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import Cards from '../UI/Cards'
// import { useState } from 'react'
 

const ExpenseItem = (props) => {

    

    return(
        <Cards className="expense-item">
            <ExpenseDate date={props.date}></ExpenseDate>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">{props.amount}</div>
            </div>
        </Cards>
    )
}

export default ExpenseItem