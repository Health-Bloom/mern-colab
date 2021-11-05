import React from 'react';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  img:{
    backgroundImage: `url("https://dribbble.com/shots/15572474-Insecurity/attachments/7357205?mode=media")`,
    height:'100vh',
    width:'auto'
  }
})
export default function Home() {
  const classes = useStyles();

    return (
      <body className={classes.img}>
    
      <Typography variant="h2" align="center">
        homepage
      </Typography>
   
    </body>
     
    );
  }
  