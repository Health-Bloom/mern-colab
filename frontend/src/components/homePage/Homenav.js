import React from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';


import {Router,Link} from "react-router-dom";
  
const useStyle = makeStyles({
    navtabs: {
        color: 'black',
        paddingLeft: 10,
        paddingRight: 10,
        textDecoration: 'none',
        fontSize: 20,
      }
})
export default function HomeNav () {
  const classes = useStyle();
   return(
    <AppBar style={{
      backgroundColor: 'bisque'
      }} position="static" color="transparent" elevation={0} >
    <Toolbar>
     <div>
      <Button>
         <Link className={classes.navtabs} to="/"> HomePage</Link>
      </Button>
      <Button>
         <Link className={classes.navtabs} to="/blogpage">BlogPage</Link>
      </Button>
       {/*
         A <Switch> looks through all its children <Route>
         elements and renders the first one whose path
         matches the current URL. Use a <Switch> any time
         you have multiple routes, but you want only one
         of them to render at a time
       */}
     
     </div>
   </Toolbar>
   </AppBar>
  )
}


