import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { Link } from "react-router-dom";

const Header = (props) => {
    return (    
        <Link to="/">
            <AppBar position="static" color="primary">
                <div className="header">
                    <p className="title">Lista de Compras</p>
                </div>
            </AppBar>
        </Link>
    )
}

export default Header;