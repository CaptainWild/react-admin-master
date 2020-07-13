import React  from 'react';
import { Filter, List, Datagrid, TextField, EditButton, TextInput, SearchInput, useGetList } from 'react-admin';

import NameField from './common/nameField';
import ResetViewsButton from '../others/resetViewButton';
import StarRatingField from '../others/starRatingField';
import ProductField from '../others/productField';

const PostBulkActionButtons = props => (
  <>
    <ResetViewsButton component='users' {...props} />
  </>
);

const ListFilter = (props) => (
  <Filter {...props}>
    <SearchInput source='q' alwaysOn />
    <TextInput source='email' placeholder='Please search with Email' resettable />
  </Filter>
);

export const UserList = (props) => {
  const { total } = useGetList('posts', {page: 1, perPage: 1}, {field: 'title', order: 'DESC'});
  const products = useGetList('posts', {page: 1, perPage: total}, {field: 'title', order: 'DESC'});

  return (
    <List {...props} bulkActionButtons={<PostBulkActionButtons />} filters={<ListFilter />} >
      <Datagrid>
        <TextField source='id' />
        <NameField />
        <TextField source='link' />
        <StarRatingField />
        <ProductField productList={products.data} />
        <EditButton basePath='/users' />
      </Datagrid>
    </List>
  )
};