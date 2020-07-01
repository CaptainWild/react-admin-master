import React  from 'react';
import { Filter, List, Datagrid, TextField, EditButton, TextInput, SearchInput, BulkDeleteButton, useGetList } from 'react-admin';

import ResetViewsButton from '../others/resetViewButton';
import RecordShow from './common/recordShow';
import StarRatingField from '../others/starRatingField';
import ProductField from '../others/productField';

const PostBulkActionButtons = props => (
  <>
    <ResetViewsButton component='users' {...props} />
    {/* default bulk delete action */}
    <BulkDeleteButton {...props} />
  </>
);

const ListFilter = (props) => (
  <Filter {...props}>
    <SearchInput source='q' alwaysOn />
    <TextInput source='email' placeholder='Please search with Email' resettable />
  </Filter>
);

export const UserList = (props) => {
  const { total } = (useGetList('posts', {page: 1, perPage: 1}, {field: 'title', order: 'DESC'}));
  const products = useGetList('posts', {page: 1, perPage: total}, {field: 'title', order: 'DESC'})

  return (
    <List {...props} bulkActionButtons={<PostBulkActionButtons />} filters={<ListFilter />} >
      <Datagrid expand={<RecordShow />}>
        <TextField source='id' />
        <TextField source='username' />
        <TextField source='name' />
        <TextField source='email' />
        <StarRatingField />
        <ProductField productList={products.data} />
        <EditButton basePath='/users' />
      </Datagrid>
    </List>
  )
};