import React, {useState} from 'react';
import {login} from "../../firebase/auth-service";
import style from './registerForm.module.css'

const LoginForm = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const validateEmail = (email) => {
        const re = /^(?!.*[\s'"\\\/<>()\[\]:;,])\S+@\S+\.\S+$/;
        return re.test(email);
    }
    const validatePassword = (password) => {
        if (password.length > 0 && password.length < 8) {
            return false;
        }
        return true;
    }

    return (
        <div>
            <div className={style.inputs}>
                <input className={style.input} type='email' placeholder={'email'}
                       value={email}
                       onChange={e => setEmail(e.target.value)}/>
                {email.length > 8 ? (validateEmail(email) ? null :
                    <h1 className={style.invalidValue}>Invalid email</h1>) : null}
                <input className={style.input} type="password" placeholder={'password'}
                       value={password}
                       onChange={e => setPassword(e.target.value)}/>
                {validatePassword(password) ? null :
                    <h1 className={style.invalidValue}>Password should have at least 8 characters</h1>}
            </div>
            <div className={style.buttonContainer}>
                <button className={style.button} onClick={() => login(email, password)}>
                    Login
                </button>
            </div>
        </div>
    )
};

export default LoginForm;