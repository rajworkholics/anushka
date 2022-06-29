import React ,{useState} from 'react';
//import React from 'react';
import './ExpenseForm.css';
const ExpenseForm = () => {

   const[enteredTitle  , setEnteredTitle] = useState('');
    const[enteredAmount , setEnteredAmount] = useState('');
    const[enteredDate  ,    setEnteredDate]  = useState('');
    //const [userInput , setUserInput] =useState({
        //enteredTitle :'',
       // enteredAmount :'',
       // enteredate :'',
   // })

    const titleChangeHandler = (event) =>{
        setEnteredTitle(event.target.value)
       
    }

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value)
        //setUserInput({
          //  ...userInput,
            //enteredAmount: event.target.value,
        //})
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value)
        //setUserInput({
           // ...userInput,
            //enteredDate : event.target.value,
        //})
    }
    const submitHandler = (event) =>{
        event.preventDefault()
    
     const expenseData ={
        title : enteredTitle,
        amount : enteredAmount,
        date : new Date (enteredDate),
     }
      console.log(expenseData)
      setEnteredTitle ('')
      setEnteredAmount ('')
      setEnteredDate ('')
    }
    return ( 
        <div>
    <form  onSubmit={submitHandler} > 
        <div className='new-expense__control'>
            <div className='new-expense__control'>
                <label>title</label>
                <input type = 'text'
                 value={enteredTitle}
                 onChange={titleChangeHandler} ></input>

            </div>
            <div className='new-expense__control'>
                <label>amount</label>
                <input type = 'number' min='0.01' step ='0.01'
                 value={enteredAmount}
                 onChange ={amountChangeHandler}></input>

            </div>
            <div className='new-expense__control'>
                <label>date</label>
                <input type = 'date'  min='2019-1-1'  max = '2022-12-31'
               value={enteredDate}
               onChange ={dateChangeHandler}></input>

            </div>
        </div>
        <div className='new-expense__action'>
            <button tpye ='submit '> add expense</button>

        </div>
        </form>
        </div>
        
)

};
export default ExpenseForm;