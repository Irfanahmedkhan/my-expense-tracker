import React, {useContext} from 'react'
import { GlobalContext } from '../Context/GlobalState';


export const Balance = () => {

    const {transactions} =useContext(GlobalContext);

    const amounts = transactions.map(transaction => transaction.amount);

    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);



    return (
        <div className='balance'>
        <h4>YOUR BALANCE</h4>
        <br/>
        <h1 id='balance'>Rs. {total}</h1>    
        </div>
    )
}



export default Balance;