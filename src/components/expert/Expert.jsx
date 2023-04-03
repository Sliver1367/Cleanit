import React, {useEffect, useState} from 'react';
import style from "./expert.module.css";
import {getRefForPhoto} from "../../firebase/experts-service";
import {useDispatch, useSelector} from "react-redux";
import {isActiveExpert, onPushedCalendar, showComponentCheckOrder, showRegistration} from "../../actions/bookNowAction";
import CheckOrder from "../checkOrder/CheckOrder";
import {auth} from "../../firebase/firebase-config";

const Expert = (props) => {
    const dispatch = useDispatch();
    const bookNow = useSelector(state => state.bookNow);

    let [showDescription, setShowDescription] = useState(false);
    let [photoUrl, setPhotoUrl] = useState('');
    let [b9, setB9] = useState(false);
    let [b12, setB12] = useState(false);
    let [b15, setB15] = useState(false);
    let [b17, setB17] = useState(false);

    const currentDate = bookNow.date
    const selectedDate = currentDate.toLocaleDateString();
    const busyTime = props.item.busyTime;
    let disabledB9 = false;
    let disabledB12 = false;
    let disabledB15 = false;
    let disabledB17 = false;


    busyTime.forEach(el => {
        switch (el) {
            case `${selectedDate}/9:00`:
                return disabledB9 = true;
            case `${selectedDate}/12:00`:
                return disabledB12 = true;
            case `${selectedDate}/15:00`:
                return disabledB15 = true;
            case `${selectedDate}/17:00`:
                return disabledB17 = true;
            default:
                return null;
        }
    })

    const reload = () => {
        if ((bookNow.isActiveExpert !== props.item.id) || (bookNow.onPushCalendar)) {
            setB9(false);
            setB12(false);
            setB15(false);
            setB17(false);
        }
    }

    useEffect(() => {
        reload();
    });

    useEffect(() => {
        getRefForPhoto(props.item.img).then(url => setPhotoUrl(url)).catch(e => console.log(e));
    }, [props.item.img]);

    return (
        <div>
            <div className={showDescription || b9 || b12 || b15 || b17 ? style.contIsPressed : style.cont}>
                <div onClick={() => setShowDescription(showDescription = !showDescription)}
                     className={style.left}>
                    <img className={style.photoOfExpert} src={photoUrl} alt={props.item.name}/>
                    <div className={style.leftText}>
                        <div>
                            <p className={style.name}>{props.item.name}</p>
                            <p className={style.prof}>{props.item.profession}</p>
                        </div>
                        <p className={style.raring}>Rating <span className={style.numRating}>{props.item.rating}</span>
                        </p>
                    </div>
                </div>
                <div className={style.rightText}>
                    <div className={style.timeBoard}>
                        <div>
                            {!disabledB9 ? (
                                <div onClick={() => {
                                    dispatch(onPushedCalendar(false));
                                    dispatch(isActiveExpert(props.item.id));
                                    setB9(b9 = !b9)
                                }}
                                     className={style.time + ` ${b9 && style.active}`}>
                                    9:00
                                </div>
                            ) : (
                                <div className={style.dis}>
                                    9:00
                                </div>
                            )}
                            {!disabledB12 ? (
                                <div onClick={() => {
                                    dispatch(onPushedCalendar(false));
                                    dispatch(isActiveExpert(props.item.id));
                                    setB12(b12 = !b12)
                                }}
                                     className={style.time + ` ${b12 && style.active}`}>
                                    12:00
                                </div>
                            ) : (
                                <div className={style.dis}>
                                    12:00
                                </div>
                            )}
                        </div>
                        <div>
                            {!disabledB15 ? (
                                <div onClick={() => {
                                    dispatch(onPushedCalendar(false));
                                    dispatch(isActiveExpert(props.item.id));
                                    setB15(b15 = !b15)
                                }}
                                     className={style.time + ` ${b15 && style.active}`}>
                                    15:00
                                </div>
                            ) : (
                                <div className={style.dis}>
                                    15:00
                                </div>
                            )}
                            {!disabledB17 ? (
                                <div onClick={() => {
                                    dispatch(onPushedCalendar(false));
                                    dispatch(isActiveExpert(props.item.id));
                                    setB17(b17 = !b17)
                                }}
                                     className={style.time + ` ${b17 && style.active}`}>
                                    17:00
                                </div>
                            ) : (
                                <div className={style.dis}>
                                    17:00
                                </div>
                            )}
                        </div>
                    </div>
                    <div>$<span className={style.salary}>{props.item.salary}</span> per service</div>
                </div>
            </div>
            {(showDescription || b9 || b12 || b15 || b17) && (
                <div className={showDescription || b9 || b12 || b15 || b17 ? style.descriptionActive :
                    style.description}>
                    <div className={style.descriptionLeft}>{props.item.description}</div>
                    {auth.currentUser ? (b9 || b12 || b15 || b17) && (
                        <button
                            className={style.descriptionBtn}
                            onClick={() => {
                                dispatch(showComponentCheckOrder(props.item.name))
                            }}>
                            Clean it!
                        </button>
                    ) : <button className={style.descriptionBtnSign}
                                onClick={() => dispatch(showRegistration(true))}>
                        Sign Up to make an order!
                    </button>}
                </div>
            )
            }
            {bookNow.onShowOrder === props.item.name ?
                <CheckOrder b9={b9} b12={b12} b15={b15} b17={b17} photo={photoUrl} expert={props.item}/> : null}
        </div>
    );
};

export default Expert;