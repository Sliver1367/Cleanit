import React, {useEffect, useState} from 'react';
import style from './expertsList.module.css'
import Expert from "../expert/Expert";
import {getExperts} from "../../firebase/experts-service";


const ExpertsList = (props) => {
    const [experts, setExperts] = useState([]);

    useEffect(() => {
        getExperts().then(data => setExperts([...data]))
    }, []);

    function getComponent(value) {
        switch (value) {
            case 'all':
                return experts.map(el => (<Expert key={el.id} item={el}/>))
            case 'Regular Cleaning Expert':
                return experts.filter(e => e.profession === 'Regular Cleaning Expert').map(el => (
                    <Expert key={el.id} item={el}/>))
            case 'Deep Cleaning Expert':
                return experts.filter(e => e.profession === 'Deep Cleaning Expert').map(el => (
                    <Expert key={el.id} item={el}/>))
            case 'Office Cleaning Expert':
                return experts.filter(e => e.profession === 'Office Cleaning Expert').map(el => (
                    <Expert key={el.id} item={el}/>))
            case 'Window Cleaning Expert':
                return experts.filter(e => e.profession === 'Window Cleaning Expert').map(el => (
                    <Expert key={el.id} item={el}/>))
            default:
                return experts.map(el => (<Expert key={el.id} item={el}/>))
        }
    }

    return (
        <div className={style.cont}>
            {getComponent(props.selectedValue)}
        </div>
    );
};

export default ExpertsList;