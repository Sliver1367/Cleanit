import React, {useState} from 'react';
import {registration} from "../../firebase/auth-service";
import style from './registerForm.module.css'
import {useDispatch} from "react-redux";

const RegisterForm = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [nickname, setNickname] = useState('');

    const dispatch = useDispatch();
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
                <input className={style.input} type="email" placeholder={'email'}
                       value={email}
                       onChange={e => setEmail(e.target.value)}/>
                {email.length > 2 ? (validateEmail(email) ? null :
                    <h1 className={style.invalidValue}>Invalid email</h1>) : null}
                <input className={style.input} type="password" placeholder={'password'}
                       value={password}
                       onChange={e => setPassword(e.target.value)}/>
                {validatePassword(password) ? null :
                    <h1 className={style.invalidValue}>Password should have at least 8 characters</h1>}
                <input className={style.input} type={'text'} placeholder={'nickname'}
                       value={nickname}
                       onChange={e => setNickname(e.target.value)}/>
            </div>
            <div className={style.buttonContainer}>
                <button className={style.button} onClick={() => {
                    if (validateEmail(email))
                        if (validatePassword(password))
                            registration(email, password, nickname);
                }}>
                    Registration
                </button>
            </div>
        </div>
    )
};

export default RegisterForm;