import React from 'react';
import { useInput } from 'react-admin';
import { Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

const avatarStyles = makeStyles({
  root: {
      opacity: 0.87,
      whiteSpace: 'nowrap',
  },
  avatar: {
    height: '240px',
    width: '200px',
    margin: '50px',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const AvartarField = props => {
  const classes = avatarStyles();
  const { input } = useInput(props);
  const { value } = input;

  return value[96] ? (
    <Avatar src={value[96]} className={classes.avatar} />
  ) : (
    <Avatar className={classes.avatar} />
  );
};

export default AvartarField;