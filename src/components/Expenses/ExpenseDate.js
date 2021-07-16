import './ExpenseDate.css';

const ExpenseDate = (props) => {
    
    var monthsInYear = new Array();
    monthsInYear[0] = "January";
    monthsInYear[1] = "February";
    monthsInYear[2] = "March";
    monthsInYear[3] = "April";
    monthsInYear[4] = "May";
    monthsInYear[5] = "June";
    monthsInYear[6] = "July";
    monthsInYear[7] = "August";
    monthsInYear[8] = "September";
    monthsInYear[9] = "October";
    monthsInYear[10] = "November";
    monthsInYear[11] = "December";
    

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