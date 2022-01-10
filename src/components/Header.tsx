import React from 'react'
import { BsMoonFill, BsSunFill } from "react-icons/bs";

interface Props {
    switchTheme: SwitchTheme;
}

export const Header: React.FC<Props> = ({ switchTheme }) => {
    const localTheme = window.localStorage.getItem('theme');
    return (
        <div className="header__container">
            <h1 className="header__text">TODO</h1>
            <span onClick={() => switchTheme()} className="icon">{localTheme === 'dark' ? <BsSunFill size="25px" color="white" /> : <BsMoonFill size="25px" color="white" />}</span>
        </div>
    )
}

