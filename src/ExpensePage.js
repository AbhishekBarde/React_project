import React from 'react'
import "./ExpensePage.css"
// import Header from './components/Header';
import Balance from './components/Balance';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/Addtransection';
import { GlobalProvider } from './context/GlobalState';
import IncomeExpenses from './components/IncomeExpenses';
import { useSelector } from 'react-redux';
const ExpensePage = () => {
  const log = useSelector((state) => state.auth.isAuthenticated);
  return (
    <>
      {log &&
        <div className="outer_div">
        
          <GlobalProvider>
            <Balance />
            <IncomeExpenses />
            <TransactionList />
            <AddTransaction />
          </GlobalProvider>

        </div>}
    
    </>
  )
}

export default ExpensePage
