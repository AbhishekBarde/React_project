import React from 'react';
import { authActions } from '../../store/index';
import { useSelector, useDispatch } from 'react-redux';
import './Navigation.css';
import { useHistory } from 'react-router-dom';


const Navigation = () => {
  const show = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const history = useHistory();
  
  const subHandler = () => {
    dispatch(authActions.logout());
    history.push('/');
    console.log(show)
  };
  return (
    <>
      {show &&
        <nav className="nav">
          <ul>

            <li>
              <a href="/">Users</a>
            </li>


            <li>
              <a href="/">Admin</a>
            </li>


            <li>
              <button onClick={subHandler}>Logout</button>
            </li>

          </ul>
        </nav>}
    </>
  )
}

export default Navigation
