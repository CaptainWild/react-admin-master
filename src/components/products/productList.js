import React from 'react';
import { List } from 'react-admin';
import { Grid } from '@material-ui/core';

import ProductCard from './common/productCard';

const ProductGrid = ({ ids, data, basePath }) => (
  <div style={{ margin: '1em' }}>
    <Grid
      container
      spacing={2}
    >
      {ids.map(id => (
        <Grid
          item
          key={id}
          lg={3}
          md={6}
          xs={12}
        >
          <ProductCard product={data[id]} />
        </Grid>
      ))}
    </Grid>
  </div>
);

ProductGrid.defaultProps = {
  data: {},
  ids: [],
};

export const ProductList = (props) => (
  <List title='All Products' {...props}>
    <ProductGrid />
  </List>
);