import * as React from 'react';
import { List, Edit, Create, SimpleForm, TextInput } from 'react-admin';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Grid } from '@material-ui/core';
import { mockData } from './data';
import ProductCard from './productCard';

export const ProductIcon = ShoppingBasketIcon;

const ProductGrid = ({ ids, data, basePath }) => (
  <div style={{ margin: '1em' }}>
    <Grid
      container
      spacing={4}
    >
      {ids.map(id => (
        <Grid
          item
          key={id}
          lg={3}
          md={6}
          xs={12}
        >
          <ProductCard product={mockData[id]} />
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
  <List title="All comments" {...props}>
    <ProductGrid />
  </List>
);

export const ProductCreate = (props) => (
  <Create title="Add New Product" {...props}>
    <SimpleForm>
      <TextInput source="title" />
      <TextInput source="body" />
      <TextInput source="price" />
      <TextInput source="slug" />
    </SimpleForm>
  </Create>
);

const EditProductTitle = ({ record }) => {
  return <span>{record ? `"${record.name}"` : ''}</span>;
};

export const ProductEdit = (props) => (
  <Edit title={<EditProductTitle />} {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="title" />
    </SimpleForm>
  </Edit>
);
