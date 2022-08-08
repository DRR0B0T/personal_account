import React from 'react';

import './Navbar.scss'
import {Link} from "react-router-dom";
import {logOut} from '../../store/auth/slice'
import {useDispatch, useSelector} from 'react-redux'

const Navbar: React.FC = () => {
    const dispatch = useDispatch()
    const token = useSelector((state:{auth:{token:string}}) => state.auth.token)

    function logoutHandler() {
        dispatch(logOut())
    }

    return (
        <nav>
            <div className="nav-wrapper navbar blue lighten-3">
                <Link to="/" className="brand-logo">Лист контактов</Link>
                {
                    token
                        ? <button
                            className='waves-effect waves-light btn blue navbar-button'
                            onClick={logoutHandler}>
                            Выйти</button>
                        : ''
                }
            </div>
        </nav>
    );
};

export default Navbar;