
import React, {useState} from 'react';
import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css'

 const ExpenseItem =(props) => {

   
    const [title ,setTitle] = useState(props.title)
       //title = 'update!';
       console.log('expenseitem evaluted by react') ;

       const clickHandler = () => {
        setTitle ('updated!');
        console.log(title);


   }
    return (
    <div className="expense-item">
       <ExpenseDate date ={props.date}/>
      <div className="expense-item__descript"> 
        <h1>{props.title} </h1>
        <div className="expense-item__price "> {props.amount}</div>
        </div>
        <button onClick = { () =>{console.log('clicked!!')} }>click button</button>
    </div>


    
  )
}
export default ExpenseItem;