import React, {useState} from 'react';
import style from './registerForm.module.css'
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";
import {useSelector} from "react-redux";


const AuthComponent = ({showModal, onClose, isLogged}) => {
    const bookNow = useSelector(state => state.bookNow)
    const [isRegistered, setIsRegistered] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault();
        onClose();
    };

    return showModal || bookNow.onShowReg ? (
            <div className={style.overlay} onClick={onClose}>
                <div className={style.modal} onClick={(e) => e.stopPropagation()}>
                    <div className={style.form} onSubmit={handleSubmit}>
                        <div className={style.header}>
                            <div className={isRegistered === false ? style.headerBtnActive : style.headerBtnNotActive}
                                 onClick={() => setIsRegistered(false)}>Registration
                            </div>
                            <div className={isRegistered === true ? style.headerBtnActive : style.headerBtnNotActive}
                                 onClick={() => setIsRegistered(true)}>Login
                            </div>
                        </div>
                        {isRegistered === false ? <RegisterForm/> : <LoginForm/>}
                        {isLogged ? <h1 className={style.successSignIn}>Success!</h1> : null}
                    </div>
                </div>
            </div>
    ) : null
};

export default AuthComponent;