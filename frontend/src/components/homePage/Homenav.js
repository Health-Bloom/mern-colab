import React from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';


import {Router,Link} from "react-router-dom";
  
{/*const useStyle = makeStyles({
    tabs: {
        color: '#FFFFFF',
        marginRight: 20,
        textDecoration: 'none',
        fontSize: 20
    }
})
*/}
export default function HomeNav () {
   return(
    <AppBar color="transparent" elevation={0} position="fixed">
    <Toolbar>
     <div>
      <Button>
         <Link to="/"> HomePage</Link>
      </Button>
      <Button>
         <Link to="/blogpage">BlogPage</Link>
      </Button>
      <Button>
      <Link to="">FollowUp</Link>
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


