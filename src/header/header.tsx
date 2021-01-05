import React from 'react';
import s from "./header.module.css"

const Header = () => {
    return (
        <div className={s.header}>
            <div className={s.header_inner}>
                <div className={s.label}>
                    <img className={s.img}
                         src="https://cdn-images-1.medium.com/max/1200/1*3y-OrKprZGqZLm82-nzGhA.jpeg" alt="">
                    </img>
                    <span className={s.logo}> вреакте</span>
                </div>
            </div>
        </div>
    )
}

export default Header