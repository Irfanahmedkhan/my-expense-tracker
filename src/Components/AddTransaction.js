import React, { useState, useContext } from 'react'
import { GlobalContext } from '../Context/GlobalState';


export const AddTransaction = () => {

    const [text, setText] = useState('')
    const [amount, setAmount] = useState('0')

    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();

        const newtransaction = {
            id: Math.floor(Math.random() * 1000),
            text,
            amount: +amount
        }
        addTransaction(newtransaction);
    }


    return (
        <>
            <h3>Add New Purchased</h3>
            <form onSubmit={onSubmit}>
                <div className='form-control'>
                    <label htmlFor='text'>Enter Transaction </label>
                    <input type='text' value={text} onChange={(event) => setText(event.target.value)} placeholder='Enter Text...'></input>
                </div>

                <div className='form-controm'>
                    <br />                   Amount: <input type='number' value={amount} onChange={(event) => setAmount(event.target.value)} placeholder='Enter Amount...'></input>
                </div>
                <button className='btn'> Add Transaction </button>
            </form>
            <div>

            </div>



        </>
    )
}

export default AddTransaction;
