import React from 'react';
import style from './thankYouForYourRequest.module.css'
import {useDispatch} from "react-redux";
import {showComponentCheckOrder, showComponentJoin, showComponentThankYou} from "../../actions/bookNowAction";

const ThankYouForYourRequest = () => {
    const dispatch = useDispatch();
    return (
        <div className={style.overlay}>
            <div className={style.modal}>
                <div className={style.form}>
                    <h1 className={style.thanksH}>
                        Thank you, for your request!
                    </h1>
                    <p className={style.thankText}>
                        Our team will contact with you as soon as possible!
                    </p>
                    <button className={style.button}
                            onClick={() => {
                                dispatch(showComponentThankYou());
                                dispatch(showComponentJoin(false));
                                dispatch(showComponentCheckOrder(false));
                            }}>Okay
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ThankYouForYourRequest;