import React from "react";
import { DiCssdeck } from 'react-icons/di'
import classes from './header.module.css';
import Nav from "../../components/Nav/nav";
import {Link} from "react-router-dom";

export default function header(){
    return(
        <header className={classes.Header}>
            <Link to="/">
            <div className={classes.LOGO}>
            <DiCssdeck style={{fontSize:3+'em' , margin: 3 + 'px'}} />
            <h3>Portfolio</h3>
            </div>
            </Link>
            <Nav />
        </header>
    )
}