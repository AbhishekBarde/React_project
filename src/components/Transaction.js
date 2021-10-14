import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

export const Transaction = ({ transaction }) => {

    const { Deletetransaction } = useContext(GlobalContext);
    const sign = transaction.amount < 0 ? '-' : '+';

    return (
        <li className={transaction.amount < 0 ? "minus" : "plus"}>
           
                <div className="sub_class">{transaction.text}</div>
                <div><span>{sign}${Math.abs(transaction.amount)}</span>
                <button className="delete-btn" onClick={() => Deletetransaction(transaction.id)}>x</button></div>
            
        </li>
    )
}
