import './ExpenseDate.css';

const ExpenseDate = (props) => {
    
    var monthsInYear = ["January","February","March","April","May", "June", "August","September","October","November","December"]; 
    const date = props.date.getDate();
    const month = monthsInYear[props.date.getMonth()];
    const year = props.date.getFullYear();
    
    return(
    <div className="expense-date">
        <div className="expense-date__day">{date}</div>
        <div className="expense-date__month">{month}</div>
        <div className="expense-date__year">{year}</div>
    </div>
    )
}

export default ExpenseDate