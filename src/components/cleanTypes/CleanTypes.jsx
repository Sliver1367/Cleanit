import React, {useEffect, useRef} from 'react';
import RegularClean from "./ReguralClean.jsx";
import style from './cleanTypes.module.css'
import DeepClean from "./DeepClean.jsx";
import OfficeClean from "./OfficeClean.jsx";
import WindowsClean from "./WindowsClean.jsx";
import {changeCleanType} from "../../actions/cleanTypeAction.js";
import {useDispatch, useSelector} from "react-redux";


function CleanTypes() {
    const user = useSelector(state => state.cleanType);
    const dispatch = useDispatch();

    const sectionRef = useRef(null);
    useEffect(() => {
        window.scrollTo(0, 0);
        window.onbeforeunload = () => window.scrollTo(0, 0);
        return () => {
            window.onbeforeunload = null;
        };
    }, []);

    const handleClick = () => {
        if (sectionRef.current) {
            sectionRef.current.scrollIntoView({behavior: 'smooth', block: 'start'});
        }
    };

    return (
        <div>
            <div className={style.cleanTypesHeader}
                 onClick={handleClick}
                 ref={sectionRef}>
                <div className={style.triangle} id={'triangle'}>
                </div>
                <div
                    className={`${user.cleanType === 'Regularly' ? style.cleanType_active : style.cleanType_notactive}`}
                    onClick={() => {
                        const type = 'Regularly'
                        dispatch(changeCleanType(type))
                        let trianglePosition = document.getElementById('triangle')
                        trianglePosition.style.transform = 'translateX(-620%) rotate(180deg)'
                    }}>
                    <h1 className={style.cleanTypes}>Regularly Cleaning</h1>
                </div>
                <div className={`${user.cleanType === 'Deep' ? style.cleanType_active : style.cleanType_notactive}`}
                     onClick={() => {
                         const type = 'Deep'
                         dispatch(changeCleanType(type))
                         let trianglePosition = document.getElementById('triangle')
                         trianglePosition.style.transform = 'translateX(-210%) rotate(180deg)'
                     }}>
                    <h1 className={style.cleanTypes}>Deep Cleaning</h1>
                </div>
                <div className={`${user.cleanType === 'Office' ? style.cleanType_active : style.cleanType_notactive}`}
                     onClick={() => {
                         const type = 'Office'
                         dispatch(changeCleanType(type))
                         let trianglePosition = document.getElementById('triangle')
                         trianglePosition.style.transform = 'translateX(210%) rotate(180deg)'
                     }}>
                    <h1 className={style.cleanTypes}>Office Cleaning</h1>
                </div>
                <div className={`${user.cleanType === 'Windows' ? style.cleanType_active : style.cleanType_notactive}`}
                     onClick={() => {
                         const type = 'Windows'
                         dispatch(changeCleanType(type))
                         let trianglePosition = document.getElementById('triangle')
                         trianglePosition.style.transform = 'translateX(630%) rotate(180deg)'
                     }}>
                    <h1 className={style.cleanTypes}>Windows Cleaning</h1>
                </div>
            </div>
            <div>
                <div className={`${user.cleanType !== 'Regularly' ? style.CleanComponent : null}`}>
                    <RegularClean/>
                </div>
                <div className={`${user.cleanType !== 'Deep' ? style.CleanComponent : null}`}>
                    <DeepClean/>
                </div>
                <div className={`${user.cleanType !== 'Office' ? style.CleanComponent : null}`}>
                    <OfficeClean/>
                </div>
                <div className={`${user.cleanType !== 'Windows' ? style.CleanComponent : null}`}>
                    <WindowsClean/>
                </div>
            </div>
        </div>
    );
}

export default CleanTypes;