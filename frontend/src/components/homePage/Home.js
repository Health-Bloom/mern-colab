import React from 'react';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  img:{
    backgroundImage: `url("https://cdn.dribbble.com/users/24158/screenshots/15572474/media/b12d296b7356cf08adc2ae9439c0aa57.jpg?compress=1&resize=700x600")`,
    height:'100vh',
    justifyContent: 'center',
    width:'auto'
  }
})
export default function Home() {
  const classes = useStyles();

    return (
      <body className={classes.img}>
    
      <Typography variant="h2" align="center">
        Welcome to mern project
      </Typography>
   
    </body>
     
    );
  }
  