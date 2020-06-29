import React from 'react';
import { Show, SimpleShowLayout } from 'react-admin';
import clsx from 'clsx';
import { Grid, Avatar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  root: {
    cursor: 'pointer',
  },
  avatar: {
    height: 120,
    width: 120,
    margin: '0 auto',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    padding: '20px',
    fontVariant: 'small-caps',
    fontWeight: 'bold',
    fontSize: '20px',
  },
  personalInfo: {
    paddingLeft: '25px',
    fontSize: '14px',
  },
  description: {
    padding: '10px',
    overflow: 'hidden',
    WebkitLineClamp: 4,
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    whiteSpace: 'normal',
    width: '100%',
    height: '80px',
    textOverflow: 'clip',
    fontSize: '15px',
  },
}));

const ShowUserTitle = ({ record }) => {
  return <span> {record ? ` : ${record.name}` : ''}</span>;
};

const RecordShow = props => {
  const { record } = props;
  const classes = useStyles();
  console.log(record)
  return (
    <Show title={<ShowUserTitle />} {...props}>
      <SimpleShowLayout>
        <div className={clsx(classes.root)}>
          <Grid
          container
          >
            <Grid item lg={2} >
              <Avatar className={classes.avatar} />
            </Grid>
            <Grid item lg={10}>
              <Typography
                className={classes.title}
              >
                {record.name}
              </Typography>
              <Typography
                className={classes.personalInfo}
              >
                {record.locale}
              </Typography>
              <Typography
                className={classes.description}
              >
                {record.description}
              </Typography>
            </Grid>
          </Grid>
        </div>
      </SimpleShowLayout>
    </Show>
  )
};

export default RecordShow;