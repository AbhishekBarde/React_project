import React from 'react';
import './App.css';
import LoginComponent from './components/LoginComponent/LoginComponent';
import MainHeader from './components/MainHeader/MainHeader';
import Home from './components/Home/Home'
import ExpensePage from './ExpensePage';
// import ExpensePage from './pages/ExpensePage/ExpensePage';
import { useSelector } from 'react-redux';
import {Route,Switch} from 'react-router-dom';
import Balance from './components/Balance';



function App() {
 
  

  return (

    <React.Fragment>
      <MainHeader />
      
        <Switch>
          <Route path="/" component={LoginComponent}/>
       
       <Route path="/mypage" component={ExpensePage}/>
          
         </Switch>   
        {/* <ExpensePage /> */}
        
       
      
      
    </React.Fragment>

  );
}

export default App;
