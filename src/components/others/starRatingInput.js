import React, { useState } from 'react';
import { useInput } from 'react-admin';
import Rating from '@material-ui/lab/Rating';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    paddingLeft: '30px',
    whiteSpace: 'nowrap',
  },
  title: {
    paddingLeft: '10px',
    paddingBottom: '5px',
    color: 'rgba(0, 0, 0, 0.54)',
    fontSize: '1rem',
    fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
    letterSpacing: '0.00938em',
    width: 20,
    height: 20,
  },
  small: {
    width: 15,
    height: 15,
  },
});

const StarRatingInput = props => {
  const { input } = useInput(props);
  console.log(useInput(props))
  const classes = useStyles();
  const [value, setValue] = useState(input.value);

  return (
    <form className={classes.root}>
      <Typography className={classes.title}>Rating</Typography>
      <Rating
        name='rating'
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          input.onChange(newValue);
        }}
      />
    </form>
  )
};

export default StarRatingInput;
