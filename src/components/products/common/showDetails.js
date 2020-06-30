import React from 'react';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardContent,
  Typography,
  Grid,
  TextField
} from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';

import { mockData } from './data';

const useStyles = makeStyles({
  root: {
  },
  info: {
    height: '500px',
  },
  image: {
    paddingLeft: '100px',
    paddingTop: '40px',
    width: '200px',
    height: '200px',
  },
  details: {
    padding: '50px',
  },
  statsIcon: {
    width: '25px',
    height: '25px',
    marginLeft: '80px',
    marginTop: '4px',
  }
});

const ShowDetails = ({record}) => {
  const classes = useStyles();
  // for test
  const data = mockData[record.id];

  return (
    <div className={classes.info}>
      <Grid container spacing={4}>
        <Grid item xs={4}>
          <Grid container>
            <Grid item>
              <img src='./images/product.png' alt='product' className={classes.image} />
            </Grid>
            <Grid item xs={12}>
              <Typography
                align='center'
                gutterBottom
                variant='h5'
              >
                {data.title}
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <AttachMoneyIcon className={classes.statsIcon} />
            </Grid>
            <Grid item xs={9}>
              <Typography
                gutterBottom
                variant='h6'
                style={{marginLeft: 30}}
              >
                {data.price}
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <AccessTimeIcon className={classes.statsIcon} />
            </Grid>
            <Grid item xs={9}>
              <Typography
                gutterBottom
                variant='h6'
                style={{marginLeft: 30}}
              >
                {data.created_at}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={8} sm>
          <div className={classes.details}>
            <Card>
              <CardContent>
                <Typography
                  gutterBottom
                  variant='h4'
                  style={{paddingLeft: 25, paddingTop: 20}}
                >
                  Product Information
                </Typography>
                <br/>
                <TextField
                  label="Ingredient"
                  defaultValue={data.ingredient}
                  InputProps={{
                    readOnly: true,
                  }}
                  variant="outlined"
                  style={{margin:10, width: 270}}
                />
                <TextField
                  label="Category of Gene-based skin care"
                  defaultValue={data.category_skinCare}
                  InputProps={{
                    readOnly: true,
                  }}
                  variant="outlined"
                  style={{margin:10, width: 270}}
                />
                <TextField
                  label="Category of application"
                  defaultValue={data.category_application}
                  InputProps={{
                    readOnly: true,
                  }}
                  variant="outlined"
                  style={{margin:10, width: 270}}
                />
                <TextField
                  label="Category of product"
                  defaultValue={data.category_product}
                  InputProps={{
                    readOnly: true,
                  }}
                  variant="outlined"
                  style={{margin:10, width: 270}}
                />
                <TextField
                  id="outlined-multiline-static"
                  label="Description"
                  multiline
                  rows={4}
                  defaultValue={data.description}
                  variant="outlined"
                  style={{margin:10, width: 560}}
                />
              </CardContent>
            </Card>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default ShowDetails;