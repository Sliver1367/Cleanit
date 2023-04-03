import React from 'react';
import style from './footer.module.css'
import logo from '../../img/Clean 2x.png'

const Footer = () => {
    return (
        <div className={style.cont}>
            <div className={style.leftFooter}>
                <img alt={"logo"} src={logo} className={style.imgLogo}/></div>
            <div className={style.rightFooter}>
                <div className={style.address}>
                    <p>Plaut, 10</p>
                    <p>Science Park</p>
                    <p>76706, Rehovot</p>
                    <p>Israel</p>
                    <br/>
                    <p>Phone: 054-56-99-350</p>
                    <p>E-mail: go@tel-ran.com</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;