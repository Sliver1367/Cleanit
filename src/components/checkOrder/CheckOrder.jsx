import React from 'react';
import style from './checkOrder.module.css'
import {useDispatch, useSelector} from "react-redux";
import {showComponentCheckOrder, showComponentThankYou} from "../../actions/bookNowAction";
import ThankYouForYourRequest from "../thankYouForYourRequest/ThankYouForYourRequest";
import {auth} from "../../firebase/firebase-config";
import {addBusyTime} from "../../firebase/experts-service";


const CheckOrder = (props) => {
    const dispatch = useDispatch();
    const bookNow = useSelector(state => state.bookNow);
    const currentDate = bookNow.date
    const formattedDate = currentDate.toLocaleDateString();
    const order = {
        name: props.expert.name,
        profession: props.expert.profession,
        currentDate: formattedDate,
        selectedTime: [props.b9, props.b12, props.b15, props.b17],
        email: auth.currentUser.email
    }

    const countPrice = (salary) => {
        let count = 0;
        if (props.b9 === true) {
            count++;
        }
        if (props.b12 === true) {
            count++;
        }
        if (props.b15 === true) {
            count++;
        }
        if (props.b17 === true) {
            count++;
        }
        return salary * count;
    }

    const busyTimeToArray = (b9, b12, b15, b17) => {
        let ar = []
        if (b9 === true)
            ar.push(`${formattedDate}/9:00`);
        if (b12 === true)
            ar.push(`${formattedDate}/12:00`);
        if (b15 === true)
            ar.push(`${formattedDate}/15:00`);
        if (b17 === true)
            ar.push(`${formattedDate}/17:00`);
        return ar;
    }

    return (
        <div className={style.overlay} onClick={() => dispatch(showComponentCheckOrder())}>
            <div className={style.modal} onClick={(e) => e.stopPropagation()}>
                <h1 className={style.header}>Please, check your order:</h1>
                <div className={style.cont}>
                    <div className={style.left}>
                        <img className={style.photoOfExpert} src={props.photo} alt={props.expert.name}/>
                        <div>
                            <h1 className={style.name}>{props.expert.name}</h1>
                            <p className={style.prof}>{props.expert.profession}</p>
                        </div>
                    </div>
                    <div className={style.rightText}>
                        <p className={style.dateField}>Date of cleaning: <span
                            className={style.chosenData}>{formattedDate.replace(/\//g, '.')}</span></p>
                        <p className={style.dateField}>Selected time:</p>
                        <div className={style.timeBoard}>
                            {props.b9 === true ? <div className={style.time}>9:00</div> : null}
                            {props.b12 === true ? <div className={style.time}>12:00</div> : null}
                            {props.b15 === true ? <div className={style.time}>15:00</div> : null}
                            {props.b17 === true ? <div className={style.time}>17:00</div> : null}
                        </div>
                        <p className={style.dateField}>Price for our service: <span
                            className={style.price}>{countPrice(+props.expert.salary)}$</span></p>
                    </div>
                </div>
                <div className={style.buttonContainer}>
                    <button className={style.button}
                            onClick={() => {
                                dispatch(showComponentThankYou())
                                console.log(order);
                                addBusyTime(props.expert.id, busyTimeToArray(props.b9, props.b12, props.b15, props.b17)
                                ).then(r => []);
                            }}>Yes, this is my order!
                    </button>
                    <button className={style.button} onClick={() => dispatch(showComponentCheckOrder())}>No, I want
                        to
                        change order
                    </button>
                </div>
                {bookNow.onShowTY && <ThankYouForYourRequest/>}
            </div>

        </div>
    );
};

export default CheckOrder;