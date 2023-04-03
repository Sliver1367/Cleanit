import React from 'react';
import Brush from '../../img/Brush.png'
import VacuumCleaner from '../../img/Vacuum Cleaner 2x.png'
import style from './cleanTypes.module.css'
import {setSelectedCategory} from "../../actions/bookNowAction";
import {useDispatch} from "react-redux";

const RegularClean = () => {
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
                <img src={VacuumCleaner} className={style.vacuumCleaner} alt={'vacuum'}/>
            </div>
            <div className={style.cleanTypesText}>
                <p className={style.headText}>Regularly</p>
                <div className={style.brushContainer}>
                    <img src={Brush} alt={'brush'}/>
                    <p className={style.underHText}>This is our standard – what we do with every order. We can also
                        add custom services to
                        customize your cleaning offer.</p>
                </div>
                <div>
                    <p className={style.mainText}>We wash the floor and wipe the baseboards</p>
                    <p className={style.mainText}>Carpets vacuuming (with your vacuum cleaner if you
                        don’t have a vacuum cleaner don’t worry, we brush carpets)</p>
                    <p className={style.mainText}>Wipe all accessible surfaces</p>
                    <p className={style.mainText}>Wipe the switches and door handles</p>
                    <p className={style.mainText}>We clean mirrors and glass surfaces</p>
                    <p className={style.mainText}>We collect and take out the garbage</p>
                    <button className={style.btnCleanTypes} onClick={() => {
                        scrollPageToBookComp();
                        dispatch(setSelectedCategory('Regular Cleaning Expert'));
                    }}>
                        Check availability
                    </button>
                </div>
            </div>
        </div>
    );
}

export default RegularClean;