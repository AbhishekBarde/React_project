import React,{useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';
import { useSelector } from 'react-redux';

const Balance = () => {

  const {transactions} = useContext(GlobalContext);
  const log = useSelector((state) => state.auth.isAuthenticated);
  const amounts = transactions.map(transaction => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
    return (
      <>
    {log &&
        <div className="container1">
      <h4 className="balance">Your Balance</h4>
      <h1 className="total">${total}</h1>

     
      </div>}
    
    </>
    )
}

export default Balance
