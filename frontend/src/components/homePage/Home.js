import React from 'react';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  body:{
    display:'block',
    height:'25vh',
    justifyContent: 'center',
    minWidth:'auto',
    backgroundSize:'cover'
  },
  img:{
    display:'block',marginLeft:'auto',marginRight:'auto'
  }

})
export default function Home() {
  const classes = useStyles();

    return (
      <body className={classes.body}>
      

      <Typography variant="h2" align="center">
        Welcome to mern project
      </Typography>
      <img src="https://cdn.dribbble.com/users/24158/screenshots/15572474/media/b12d296b7356cf08adc2ae9439c0aa57.jpg?compress=1&resize=700x600" className={classes.img}></img>
    </body>
     
    );
  }
  