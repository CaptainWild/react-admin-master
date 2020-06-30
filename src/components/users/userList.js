import React  from 'react';
import { Filter, List, Datagrid, TextField, EditButton, TextInput, SearchInput, BulkDeleteButton } from 'react-admin';

import ResetViewsButton from '../others/resetViewButton';
import RecordShow from './common/recordShow';
import StarRatingField from '../others/starRatingField';

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

export const UserList = (props) => (
  <List {...props} bulkActionButtons={<PostBulkActionButtons />} filters={<ListFilter />} >
    <Datagrid expand={<RecordShow />}>
      <TextField source='id' />
      <TextField source='username' />
      <TextField source='name' />
      <TextField source='email' />
      <StarRatingField />
      <TextField source='product' />
      <EditButton basePath='/users' />
    </Datagrid>
  </List>
);