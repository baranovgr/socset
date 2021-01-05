import React from 'react';
import s from "./navbar.module.css"
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (

        <div className={s.navbar}>
            <li className={s.li}>
                <NavLink className={s.a} to="/profile">
                    <img  className ={s.imgNav} src="http://sergeychikin.ru/365/animal/human/face/face.svg">
                    </img>
                <span className={s.navwords}> Профиль</span>
            </NavLink>
            </li>
            <li className={s.li}>
                <a className={s.a}>
                    <img className ={s.imgNav} src="http://sergeychikin.ru/365/office/newspaper.svg">
                    </img>
                    <span className={s.navwords}> Новости</span>
                </a>
            </li>
            <li className={s.li}>
                <NavLink className={s.a} to="/message">
                    <img className ={s.imgNav} src="http://sergeychikin.ru/365/office/paper-plane.svg">
                    </img>
                    <span className={s.navwords}> Сообщения</span>
                </NavLink>
            </li>
            <li className={s.li}><a className={s.a}>
                <img className ={s.imgNav} src="http://sergeychikin.ru/365/animal/human/person.svg">
                </img>
                <span className={s.navwords}> Друзья</span></a></li>
            <li className={s.li}><a className={s.a}>
                <img className ={s.imgNav} src="http://sergeychikin.ru/365/electronic/speaker.svg">
                </img>
                <span className={s.navwords}> Музыка</span></a></li>
            <li className={s.li}><a className={s.a}>
                <img className ={s.imgNav} src="http://sergeychikin.ru/365/art/clapperboard.svg">
            </img>
                <span className={s.navwords}> Видео</span></a></li>
            <li className={s.li}><a className={s.a}>
                <img className ={s.imgNav} src="http://sergeychikin.ru/365/animal/human/person.svg">
                </img>
                <span className={s.navwords}> Игры</span></a></li>
            <li className={s.li}><a className={s.a}>
                <img className ={s.imgNav} src="http://sergeychikin.ru/365/office/picture.svg">
                </img>
                <span className={s.navwords}> Фотографии</span></a></li>
        </div>
    )
}

export default Navbar