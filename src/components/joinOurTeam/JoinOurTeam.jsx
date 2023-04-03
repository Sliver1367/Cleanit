import React, {useEffect, useState} from 'react';
import style from './joinOurTeam.module.css'
import {useDispatch, useSelector} from "react-redux";
import {showComponentJoin, showComponentThankYou} from "../../actions/bookNowAction";
import ThankYouForYourRequest from "../thankYouForYourRequest/ThankYouForYourRequest";

const JoinOurTeam = () => {
    const dispatch = useDispatch();
    const [data, setData] = useState([]);
    const bookNow = useSelector(state => state.bookNow);
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');


    const validateEmail = (email) => {
        const re = /^(?!.*[\s'"\\\/<>()\[\]:;,])\S+@\S+\.\S+$/;
        return re.test(email);
    }

    const handleSubmit = (event) => {
        event.preventDefault(); // prevent page refresh
        const formData = new FormData(event.target); // get form data
        const newData = {}; // create a new object to store the form data
        formData.forEach((value, key) => {
            newData[key] = value;
        });
        setData([...data, newData]); // update the state variable with the new data
        dispatch(showComponentThankYou());
    };

    useEffect(() => {
        console.log(data);
    })

    return (
        <div className={style.overlay} onClick={() => dispatch(showComponentJoin())}>
            <div className={style.modal} onClick={(e) => e.stopPropagation()}>
                <h1 className={style.header}>Join Our Team</h1>
                <form className={style.inputs} onSubmit={handleSubmit}>
                    <input className={style.input} type={"text"} name={'name'} placeholder={'name'}
                           value={name}
                           onChange={e => setName(e.target.value)}/>
                    {!name ? (validateEmail(name) ? null :
                            <h1 className={style.invalidValue}>Enter your name</h1>) :
                        null
                    }
                    <input className={style.input} type={"number"} name={'phone'} placeholder={'phone'}
                           value={phone}
                           onChange={e => setPhone(e.target.value)}/>
                    {!phone ? (validateEmail(phone) ? null :
                            <h1 className={style.invalidValue}>Enter your phone number</h1>) :
                        null
                    }
                    <input className={style.input} type="email" name={'email'} placeholder={'email'}
                           value={email}
                           onChange={e => setEmail(e.target.value)}/>
                    {email.length > 2 ? (validateEmail(email) ? null :
                        <h1 className={style.invalidValue}>Invalid email</h1>) : null}
                    <input className={style.input} type={"text"} name={'profession'} placeholder={'your profession'}/>
                    <div className={style.buttonContainer}>
                        {validateEmail(email) && name && phone && (
                            <input className={style.button} type="submit" value="Send request"/>)}

                    </div>
                </form>
                {bookNow.onShowTY && <ThankYouForYourRequest/>}

            </div>
        </div>
    );
};

export default JoinOurTeam;