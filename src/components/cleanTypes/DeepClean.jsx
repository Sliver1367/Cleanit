import React from 'react';
import Brush from '../../img/Brush.png'
import DeepCleanIMG from '../../img/Deep Clean 2x.png'
import style from './cleanTypes.module.css'
import {useDispatch} from "react-redux";
import {setSelectedCategory} from "../../actions/bookNowAction";

const DeepClean = () => {
    function scrollPageToBookComp() {
        window.scroll({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth'
        });
    }

    const dispatch = useDispatch();

    return (
        <div className={style.container}>
            <div>
                <img src={DeepCleanIMG} className={style.vacuumCleaner} alt={'deep'}/>
            </div>
            <div className={style.cleanTypesText}>
                <p className={style.headText}>Deep</p>
                <div className={style.brushContainer}>
                    <img src={Brush} alt={'brush'}/>
                    <p className={style.underHText}>When our team comes to you, is managed by the manager. The
                        manager evaluates the duration, checks the quality and answers all your questions.</p>
                </div>
                <div>
                    <p className={style.mainText}>Wipe all accessible surfaces, switches and door handles</p>
                    <p className={style.mainText}>Washing windows, mirrors and glass surfaces</p>
                    <p className={style.mainText}>Washing furniture inside and outside</p>
                    <p className={style.mainText}>Wiping the walls</p>
                    <p className={style.mainText}>Washing chandeliers and lamps</p>
                    <p className={style.mainText}>We wash the floor, wipe the baseboards and vacuum the carpet</p>
                    <p className={style.mainText}>We take out the garbage</p>
                    <button className={style.btnCleanTypes} onClick={() => {
                        scrollPageToBookComp();
                        dispatch(setSelectedCategory('Deep Cleaning Expert'));
                    }}>
                        Check availability
                    </button>
                </div>
            </div>
        </div>
    );
}

export default DeepClean;