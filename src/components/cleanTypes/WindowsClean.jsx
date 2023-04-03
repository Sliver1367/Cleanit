import React from 'react';
import Brush from '../../img/Brush.png'
import WindowsCleanIMG from '../../img/WindowsCleanIMG.png'
import style from './cleanTypes.module.css'
import {setSelectedCategory} from "../../actions/bookNowAction";
import {useDispatch} from "react-redux";

const OfficeClean = () => {
    const dispatch = useDispatch();

    function scrollPageToBookComp() {
        window.scroll({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth'
        });
    }

    return (
        <div className={style.container}>
            <div>
                <img src={WindowsCleanIMG} className={style.vacuumCleaner} alt={'window'}/>
            </div>
            <div className={style.cleanTypesText}>
                <p className={style.headText}>Windows</p>
                <div className={style.brushContainer}>
                    <img src={Brush} alt={'brush'}/>
                    <p className={style.underHText}>Our employee arrives with everything necessary at the agreed
                        time and gets to work immediately.</p>
                </div>
                <div>
                    <p className={style.mainText}>Wash glass on both sides</p>
                    <p className={style.mainText}>We clean the frame inside and out</p>
                    <p className={style.mainText}>Washing mosquito nets</p>
                    <p className={style.mainText}>Wipe the window sills</p>
                    <button className={style.btnCleanTypes} onClick={() => {
                        scrollPageToBookComp();
                        dispatch(setSelectedCategory('Window Cleaning Expert'));
                    }}>
                        Check availability
                    </button>
                </div>
            </div>
        </div>
    );
}

export default OfficeClean;