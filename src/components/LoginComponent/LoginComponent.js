import React, { useState, useEffect } from 'react';
import loginimg from '../../images/img-login.svg';
import profileavatar from '../../images/profile-avatar.svg';
import './LoginComponent.css';
import { authActions } from '../../store/index';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';



const LoginComponent = () => {

    const history = useHistory();

    const handleClick = () => history.push('/mypage');
    const [enteredEmail, setEnteredEmail] = useState("");
    // const [emailIsValid, setEmailIsValid] = useState();
    const [enteredPassword, setEnteredPassword] = useState("");
    // const [passwordIsValid, setPasswordIsValid] = useState();
    const [formIsValid, setFormIsValid] = useState(false);

    const dispatch = useDispatch();


    useEffect(() => {


        const handler = setTimeout(() => {
            setFormIsValid(
                enteredEmail.includes("@") && enteredPassword.trim().length > 6
            );
        }, 500);

        // this function is used to cleanup
        return () => {
            clearTimeout(handler);

        };
    }, [enteredEmail, enteredPassword]);


    // console.log(inputs);
    const Addclass1 = () => {
        const inputs = document.querySelector("#input1");
        let parent = inputs.parentNode.parentNode;
        parent.classList.add("focus")

    }
    const Removeclass1 = () => {
        const inputs = document.querySelector("#input1");
        let parent = inputs.parentNode.parentNode;
        if (inputs.value === '') {
            parent.classList.remove("focus");
        }

    }
    const Addclass2 = () => {
        const inputs1 = document.querySelector("#input2");
        let parent1 = inputs1.parentNode.parentNode;
        parent1.classList.add("focus")

    }
    const Removeclass2 = () => {
        const inputs1 = document.querySelector("#input2");
        let parent1 = inputs1.parentNode.parentNode;
        console.log(inputs1.value)
        if (inputs1.value === '') {
            parent1.classList.remove("focus");
        }

    }

    const emailChangeHandler = (event) => {
        setEnteredEmail(event.target.value);
    };

    const passwordChangeHandler = (event) => {
        setEnteredPassword(event.target.value);
        console.log(log)
    };

    // const validateEmailHandler = () => {
    //     setEmailIsValid(enteredEmail.includes("@"));
    // };

    // const validatePasswordHandler = () => {
    //     setPasswordIsValid(enteredPassword.trim().length > 6);
    // };

    const submitHandler = (event) => {
        event.preventDefault();
        // props.onLogin(enteredEmail, enteredPassword);
        dispatch(authActions.login());
        setEnteredEmail('')
        setEnteredPassword('')
        

    };


    const log = useSelector((state) => state.auth.isAuthenticated);
    // var data = useRef();



    return (
        <React.Fragment>
            {!log &&
                <div className="container">
                    <div className="img">
                        <img src={loginimg} alt="loginimg" />
                    </div>
                    <div className="login-content">
                        <form onSubmit={submitHandler}>
                            <img src={profileavatar} alt="avatar" />
                            <h2 className="title">Welcome</h2>

                            <div className="input-div one">
                                <div className="i">
                                    <i className="fas fa-user" />
                                </div>
                                <div className="div">
                                    <h5 className="testh5">Username</h5>
                                    <input
                                        id="input1"
                                        type="text"
                                        className="form-control"
                                        value={enteredEmail}
                                        onClick={Addclass1}
                                        onChange={emailChangeHandler}

                                        onBlur={Removeclass1}
                                        // onFocus={Addclass1}
                                        autoComplete="off" />
                                </div>
                            </div>



                            <div className="input-div pass">
                                <div className="i">
                                    <i className="fas fa-lock" />
                                </div>
                                <div className="div">
                                    <h5>Password</h5>
                                    <input type="password"
                                        id="input2"
                                        className="form-control"
                                        value={enteredPassword}
                                        onClick={Addclass2}
                                        onChange={passwordChangeHandler}

                                        onBlur={Removeclass2}


                                    />
                                </div>
                            </div>

                            <a className="forpass" href="#">Forget Password?</a>
                            <input type="submit" className="btn" value="Login" disabled={!formIsValid} onClick={handleClick}/>
                        </form>
                    </div>
                </div>
            }
        </React.Fragment>
    )
}

export default LoginComponent
