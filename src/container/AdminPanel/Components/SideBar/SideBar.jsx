import React from 'react';
import { Link } from 'react-router-dom';
import styles from './SideBar.module.css';
import { useAuth } from '../../../../Context/AuthContext';

function SideBar(){
    const { logOut } = useAuth()
    return(
        <div className={["bg-blue-900","w-1/5","min-h-screen flex justify-center" , styles.SideNav].join(" ")}>
            <nav className='fixed'>
            <h2 className='text-center p-4' > C Portfolio </h2>
            <ul className='flex flex-col w-fit text-left mx-auto'>
                <li><Link to="/Admin/Dashboard">Dashboard</Link></li>
                <li><Link to="/Admin/Posts">Posts</Link></li>
                <li><Link to="/Admin/Project">Project</Link></li>
                <li> <button onClick={logOut}> LogOut! </button> </li>
            </ul>
            </nav>
        </div>
    )
}

export default SideBar;