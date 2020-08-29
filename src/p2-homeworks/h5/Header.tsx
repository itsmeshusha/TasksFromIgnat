import React from "react";
import { PATH } from "./Routes";
import {NavLink} from 'react-router-dom';
import s from './Header.module.css'

function Header() {
    return (
        <div className={s.header}>
            <NavLink to={PATH.PRE_JUNIOR} activeClassName={s.header_active}>PRE_JUNIOR</NavLink>
            <NavLink to={PATH.JUNIOR} activeClassName={s.header_active}>JUNIOR</NavLink>
            <NavLink to={PATH.JUNIOR_PLUS} activeClassName={s.header_active}>JUNIOR_PLUS</NavLink>


        </div>
    );
}

export default Header;
