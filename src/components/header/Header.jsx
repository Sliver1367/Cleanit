import React, {useState} from 'react';
import Clean from '../../img/Clean 2x.png'
import style from './header.module.css'
import AuthComponent from "../registration/AuthComponent";
import {auth} from "../../firebase/firebase-config";
import {logout} from "../../firebase/auth-service";
import JoinOurTeam from "../joinOurTeam/JoinOurTeam";
import {useDispatch, useSelector} from "react-redux";
import {showComponentJoin, showRegistration} from "../../actions/bookNowAction";


const Header = (props) => {
    const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch();
    const bookNow = useSelector(state => state.bookNow)
    const onClose = () => {
        setShowModal(false);
        dispatch(showRegistration(false))
    };

    const handleOpenModal = () => {
        setShowModal(true);
    };

    function scrollPage() {
        // Scroll the page down
        window.scroll({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth'
        });

        // Wait for 1 second before scrolling back up
        setTimeout(function () {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
        }, 1000);
    }

    function scrollPageToBookComp() {
        window.scroll({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth'
        });
    }

    return (
        <>
            <div className={style.header}>
                <img src={Clean} className={style.cleanImg} alt={'logo'}/>
                <div className={style.headerRight}>
                    <div className={style.headerText}>
                        <h2 className={style.headerHome} onClick={scrollPage}>
                            Home
                        </h2>
                        <h2 className={style.headerBook} onClick={scrollPageToBookComp}>
                            Book
                        </h2>
                        <h2 className={style.headerJoinOurTeam}
                            onClick={() => dispatch(showComponentJoin(true))}>
                            Join our team
                        </h2>
                    </div>
                    <div>
                        {auth.currentUser ?
                            <div className={style.signInContainer}>
                                <h1 className={style.signInLabel}
                                    onClick={handleOpenModal}>{auth.currentUser.displayName}
                                </h1>
                                <button className={style.signInBtn} onClick={() => logout()}>
                                    Logout
                                </button>
                            </div>
                            : <button className={style.btnSignUp} onClick={handleOpenModal}>
                                Sign Up
                            </button>}

                        <AuthComponent showModal={showModal} onClose={onClose} isLogged={props.isLogged}/>
                    </div>
                </div>
            </div>
            {bookNow.onShowJoin && <JoinOurTeam/>}
        </>
    );
}
export default Header;