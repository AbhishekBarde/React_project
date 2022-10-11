import React from 'react'
// import ExpensePage from '../ExpensePage/ExpensePage'
import { useSelector } from 'react-redux';
import classes from './Home.module.css'

const Home = () => {

    const clog = useSelector((state) => state.auth.isAuthenticated);
    

    return (<>
{log &&<div className={classes.home}>
       <h1>Welcome</h1>
    </div>}
    </> 
    )
}

export default Home
