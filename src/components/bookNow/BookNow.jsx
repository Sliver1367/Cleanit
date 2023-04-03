import React, {useEffect, useState} from 'react';
import Calendar from "react-calendar";
import './Calendar.css';
import ExpertsList from "../expertList/ExpertsList";
import style from "./bookNow.module.css";
import {useDispatch, useSelector} from "react-redux";
import {getDate, onPushedCalendar, setSelectedCategory} from "../../actions/bookNowAction";

const BookNow = (props) => {
    const [value, onChange] = useState(new Date());

    const dispatch = useDispatch();
    const bookNow = useSelector(state => state.bookNow);

    const dateChangeCheck = () => {
        if (bookNow.date !== value) {
            dispatch(getDate(value));
            dispatch(onPushedCalendar(true));
        }
    }

    useEffect(() => {
        dateChangeCheck();
    });

    const handleSelectChange = (event) => {
        dispatch(setSelectedCategory(event.target.value));
    };

    function handleNextMonthClick() {
        const nextButton = document.querySelector(".react-calendar__navigation__next-button")
        nextButton.click();
    }

    function handlePrevMonthClick() {
        const prevButton = document.querySelector(".react-calendar__navigation__prev-button")
        prevButton.click();
    }

    return (
        <div className={style.container}>
            <div className={style.leftBookNow}>
                <h1 className={style.hBookNow}>Book now</h1>
                <select value={bookNow.selectedCategory} className={style.options} onChange={handleSelectChange}>
                    <option value={'all'}>All Categories</option>
                    <option value={'Regular Cleaning Expert'}>Regularly Cleaning</option>
                    <option value={'Deep Cleaning Expert'}>Deep Cleaning</option>
                    <option value={'Office Cleaning Expert'}>Office Cleaning</option>
                    <option value={'Window Cleaning Expert'}>Windows Cleaning</option>
                </select>
                <p className={style.chooseText}>Choose available dates:</p>
                <div className={style.calendar}>
                    <button className={style.prevMonthBtn} onClick={handlePrevMonthClick}>
                        <span>&#60;</span>
                    </button>
                    <Calendar value={value} onChange={onChange}
                              nextLabel='>'
                              maxDetail='month'
                              minDetail='month'
                              next2Label=''
                              calendarType="ISO 8601"
                              locale="us-US"/>
                    <button className={style.nextMonthBtn} onClick={handleNextMonthClick}>
                        <span>&#62;</span>
                    </button>
                </div>
            </div>
            <div className={style.rightBookNow}>
                <p className={style.chooseText}>Choose available expert and time:</p>
                <ExpertsList setShowJoin={props.setShowJoin} showJoin={props.showJoin}
                             selectedValue={bookNow.selectedCategory}/>
            </div>
        </div>
    );
};

export default BookNow;