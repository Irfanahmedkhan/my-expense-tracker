import React, { useState, useContext} from 'react'
import { GlobalContext } from '../Context/GlobalState';


export const Expense = () => {

    const [text, setText] = useState('')
    let [amount, setAmount] = useState('0')

    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault ();

    const newtransaction = {
        id: Math.floor(Math.random() * 1000),
        text,
        amount: +amount,
    }
    addTransaction(newtransaction);
    
    }

    return (
        <>
            <h3>Add Expense </h3>
            <form onSubmit={onSubmit}>
                <div className='form-control'>
                    <label htmlFor='text'>Text</label>
                    <input type='text' value={text} onChange={(event) => setText(event.target.value)} placeholder='Enter Text...'></input>
                </div>

                <div className='form-controm'>
                    <label htmlFor='amount'>Amount <br /> 
                    </label>
                    <input type='number' value={amount} onChange={(event) => setAmount(event.target.value)} placeholder='Enter Amount...'></input>
                </div>
                <button className='Ebtn'> Expense </button>
            </form>
            <div>

            </div>



        </>
    )
}

export default Expense;
