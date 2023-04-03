import React from 'react';
import WetFloor from '../../img/Wet floor.png'
import style from './home.module.css'


const Home = () => {

    window.onscroll = function () {
        scrollFunction()
    };

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("btn").style.display = "block";
        } else {
            document.getElementById("btn").style.display = "none";
        }
    }

    const ScrollingUpButtonFunc = () => {
        window.scroll({
            top: 0,
            behavior: "smooth"
        });
    };

    function scrollPageToBookComp() {
        window.scroll({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth'
        });
    }

    return (
        <div>
            <div className={style.home}>
                <div>
                    <img className={style.wetFloor} src={WetFloor} alt={'wetFloor'}/>
                </div>
                <div className={style.homeText}>
                    <div className={style.alwaysHomeText}>
                        <h1 className={style.alwaysClean}>always clean</h1>
                        <h1 className={style.homeOffice}>HOME & OFFICE</h1>
                    </div>
                    <p className={style.mainText}>It’s hard to find someone who enjoys cleaning. It takes a lot of
                        energy, time, and you always
                        have to do it when there are so many other things to do around you.</p>
                    <p className={style.mainText}>Is it possible to make it so that your surroundings are clean, but
                        not
                        to create a constant
                        torture of cleaning? Of course it is!</p>

                    <button className={style.btnBookNow}
                            onClick={scrollPageToBookComp}>
                        Book now
                    </button>
                    <button id={'btn'}
                            className={style.scrollToTop}
                            onClick={ScrollingUpButtonFunc}>
                        &#9650;
                    </button>
                </div>
            </div>
        </div>
    );
}
export default Home;