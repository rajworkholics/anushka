
import React from 'react';
import './ExpenseForm.css';
const ExpenseForm = () => {
    return ( <form>
        <div className='new-expense__control'>
            <div className='new-expense__control'>
                <labels>title</labels>
                <input type = 'text' ></input>

            </div>
            <div className='new-expense__control'>
                <labels>amount</labels>
                <input type = 'number' min='0.01' step ='0.01'></input>

            </div>
            <div className='new-expense__control'>
                <labels>date</labels>
                <input type = 'date'  min='2019-1-1'  max = '2022-12-31'></input>

            </div>
        </div>
        <div className='new-expense__action'>
            <button tpye ='submit '> add expense</button>

        </div>
        </form>
    )

}
export default ExpenseForm()