import React from 'react';
import { useRedirect } from 'react-admin';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Grid,
  Divider
} from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';

const useStyles = makeStyles(theme => ({
  root: {},
  imageContainer: {
    height: 64,
    width: 64,
    margin: '0 auto',
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: '5px',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
  },
  description: {
    textAlign: 'center',
    height: 80,
    display: 'inline-block',
    fontSize: 15,
  },
  image: {
    width: '100%'
  },
  statsItem: {
    display: 'flex',
    alignItems: 'center'
  },
  statsIcon: {
    color: theme.palette.icon,
    marginRight: theme.spacing(1)
  }
}));

const ProductCard = props => {
  const { className, product, ...rest } = props;
  const redirect = useRedirect();
  const showProduct = id => {
    redirect(`/posts/${product.id}`);
  }
  const classes = useStyles();
  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardContent>
        <div className={classes.imageContainer}>
          <img
            alt="Product"
            className={classes.image}
            src={product.imageUrl ? product.imageUrl : '/images/product.png' }
            onClick={showProduct}
          />
        </div>
        <Typography
          align="center"
          gutterBottom
          variant="h6"
          cursor="pointer"
        >
          {product.title}
        </Typography>
        <Typography
          className={classes.description}
        >
          {product.description}
        </Typography>
      </CardContent>
      <Divider />
      <CardActions>
        <Grid
          container
          justify="space-between"
        >
          <Grid
            className={classes.statsItem}
            item
          >
            <AccessTimeIcon className={classes.statsIcon} />
            <Typography
              display="inline"
              variant="body2"
            >
              {`Production Date: ${product.created_at}`}
            </Typography>
          </Grid>
          <Grid
            className={classes.statsItem}
            item
          >
            <AttachMoneyIcon className={classes.statsIcon} />
            <Typography
              display="inline"
              variant="body2"
            >
              {product.price}
            </Typography>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
};

ProductCard.propTypes = {
  className: PropTypes.string,
  product: PropTypes.object.isRequired
};

export default ProductCard;
