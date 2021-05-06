import React from "react";

// importing files
import { database } from "../data/database";
import { Context } from "../store/Context";

import { InitEmail, emailReducer, EMAIL_VALUE, IS_VALID_EMAIL } from "../store/Reducer";
import { InitPassword, passwordReducer, PASSWORD_VALUE, IS_VALID_PASSWORD } from "../store/Reducer";

let Provider = (props) => {
    // useReducer instead of useState line 14 - 16
    let [emailState, dispatchEmailState] = React.useReducer( emailReducer, InitEmail);
    let {email, isValidEmail} = emailState;

    // // useState
    // let [email, setEmail] = React.useState();
    // let [isValidEmail, setIsValidEmail] = React.useState();

    let [passwordState, dispatchPasswordState] = React.useReducer( passwordReducer, InitPassword);
    let {password, isValidPassword} = passwordState;

    // let [password, setPassword] = React.useState();
    // let [isValidPassword, setIsValidPassword] = React.useState();

    // validator
    let validator = (params) => {
        let isValid = false;

        let index = database.findIndex((user) => user.email === email);
        // console.log("user ==> ", index);

        database.forEach((user, i) => {
            if (index === i) {
                if (params === 'email' && user.email === email) {
                    isValid = true;
                    // setIsValidEmail(true);
                    dispatchEmailState({type: IS_VALID_EMAIL, payload: true});
                }
                if (params === 'password' && user.password === password) {
                    isValid = true;
                    dispatchPasswordState({type: IS_VALID_PASSWORD, payload: true});
                    // setIsValidPassword(true);
                }
            }
        });
        return isValid;
    };

    // onEmailHandler
    let onEmailHandler = (event) => {
        let value = event.target.value.trim().toLowerCase();
        dispatchEmailState({type: EMAIL_VALUE, payload: value});
        // setEmail(value);
    }

    // onCheckEmailHandler
    let onCheckEmailHandler = () => {
        let isValid = validator('email');
        // console.log('onCheckEmailHandler -->', isValid);
        if (isValid) return;
        // setIsValidEmail(isValid);
        dispatchEmailState({type: IS_VALID_EMAIL, payload: isValid})
    };

    // onPasswordHandler
    let onPasswordHandler = (e) => {
        let value = e.target.value.trim();
        // setPassword(value);
        dispatchPasswordState({type: PASSWORD_VALUE, payload: value});
    }

    // onPasswordCheckHandler
    let onPasswordCheckHandler = () => {
        let isValid = validator('password');
        // console.log('onPasswordCheckHandler -->', isValid);
        if (isValid) return;
        // setIsValidPassword(isValid);
        dispatchPasswordState({type: IS_VALID_PASSWORD, payload: isValid});
    }

    // sign in function
    let onSignInHandler = () => {
        if (!isValidEmail || !isValidPassword) {
            alert('Check your input. Either the email or password is not valid');
        }
        // if (!isValidPassword) {
        //     alert('Check your input. Either the email or password is not valid');
        // }
        else {
            localStorage.setItem('token', true);
            window.location.reload();
        }
    }

    return (
        <Context.Provider value={{ onSignInHandler, onEmailHandler, onCheckEmailHandler, onPasswordHandler, onPasswordCheckHandler }}>
            { props.children }
        </Context.Provider>
    )
};

export { Context, Provider };