import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';


const Addtransection = () => {
    const [text,setText] = useState('');
    const [amount,setAmount] = useState(0);

    const {Addetransaction} = useContext(GlobalContext);

    const gettingText = (e) =>{
        setText(e.target.value);
        // console.log(e.target.value)
    }
    const gettingAmount = (e) =>{
        setAmount(e.target.value);
        // console.log(e.target.value)

    }

    const onSubmit = e =>{
        e.preventDefault()
        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: +amount
        }
        Addetransaction(newTransaction);
    }
    return (
        <>
            <h3 className="ntran">Add new transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" value={text} onChange={gettingText} placeholder="Enter text..." />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount <br />
                        (negative - expense, positive - income)
                    </label>
                    <input type="number" value={amount} onChange={gettingAmount} placeholder="Enter amount..." />
                </div>
                <button className="btn">Add transaction</button>
            </form>

        </>
    )
}

export default Addtransection
