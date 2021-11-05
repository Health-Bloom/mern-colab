import React from "react";
// import React,{ useState } from "react";
import { AppBar, Toolbar, makeStyles } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

const useStyle = makeStyles({
    tabs: {
        color: 'black',
        marginRight: 20,
        textDecoration: 'none',
        fontSize: 20
    }
})

const Navbar = () => {
// const Navbar = ({ setLoginUser }) => {
    // const [ user, setLoginUser] = useState({});
    const classes = useStyle();
    return (
        <AppBar position="static" color="#f3e3b7">
            <Toolbar>
                <NavLink className={classes.tabs} to="./" exact>To-Do App</NavLink>
                {/* { user && user._id ? 
                    <NavLink className={classes.tabs} onClick={() => setLoginUser({})} to="./" exact>Logout</NavLink>
                : 
                <div> 
                    <NavLink className={classes.tabs} to="register" exact>Register</NavLink>
                    <NavLink setLoginUser={setLoginUser} className={classes.tabs} to="login" exact>Login</NavLink>
                </div> 
                } */}
                    <NavLink className={classes.tabs} to="./" exact>Logout</NavLink>
                    <NavLink className={classes.tabs} to="register" exact>Register</NavLink>
                    <NavLink className={classes.tabs} to="login" exact>Login</NavLink>
                </Toolbar>
        </AppBar>
    )
}

export default Navbar;