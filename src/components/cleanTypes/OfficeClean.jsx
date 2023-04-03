import React from 'react';
import Brush from '../../img/Brush.png'
import OfficeCleanIMG from '../../img/OfficeCleanIMG.png'
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
                <img src={OfficeCleanIMG} className={style.vacuumCleaner} alt={'office'}/>
            </div>
            <div className={style.cleanTypesText}>
                <p className={style.headText}>Office</p>
                <div className={style.brushContainer}>
                    <img src={Brush} alt={'brush'}/>
                    <p className={style.underHText}>The cleaner comes every morning or evening to restore
                        cleanliness and order.</p>
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
                        dispatch(setSelectedCategory('Office Cleaning Expert'));
                    }}>
                        Check availability
                    </button>
                </div>
            </div>
        </div>
    );
}

export default OfficeClean;