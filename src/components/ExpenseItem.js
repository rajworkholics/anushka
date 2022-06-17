
import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css'

 function ExpenseItem(props) {
    return (
    <div className="expense-item">
       <ExpenseDate date ={props.date}/>
      <div className="expense-item__descript"> 
        <h1>{props.title} </h1>
        <div className="expense-item__price "> {props.amount}</div>
        </div>
    </div>

    
  )
}
export default ExpenseItem;