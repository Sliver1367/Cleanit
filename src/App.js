import React, {useEffect, useState} from 'react';
import Home from "./components/home/Home";
import './App.css'
import Header from "./components/header/Header";
import CleanTypes from "./components/cleanTypes/CleanTypes";
import {getAuth} from "firebase/auth";
import BookNow from "./components/bookNow/BookNow";
import Footer from "./components/footer/Footer";

const App = () => {
    const auth = getAuth();
    const [isLoading, setIsLoading] = useState(true);
    const [isLogged, setIsLogged] = useState(null)
    useEffect(() => {
        auth.onAuthStateChanged(() => {
            setIsLoading(false);
            if (auth !== null) {
                if (auth.currentUser) {
                    setIsLogged(true)
                } else {
                    setIsLogged(false)
                }
            }
        })
    }, []);
    return (
        isLoading ? <div className={'spinner'}></div> :
            <div>
                <Header isLogged={isLogged}/>
                <Home/>
                <CleanTypes/>
                <BookNow/>
                <Footer/>
            </div>
    );
};

export default App;