import React, { Fragment } from 'react';
import { Filter, List, SimpleShowLayout, Show, Datagrid, Edit, SimpleForm, TextField, EditButton, TextInput, SearchInput, ReferenceInput, SelectInput, BulkDeleteButton } from 'react-admin';
import GroupIcon from '@material-ui/icons/Group';

import ResetViewsButton from '../others/resetViewButton';
export const UserIcon = GroupIcon;

const PostBulkActionButtons = props => (
  <Fragment>
    <ResetViewsButton component="users" {...props} />
    {/* default bulk delete action */}
    <BulkDeleteButton {...props} />
  </Fragment>
);

const ListFilter = (props) => (
  <Filter {...props}>
    <SearchInput source="q" alwaysOn />
    <TextInput source="email" placeholder="Please search with Email" resettable />
  </Filter>
);

const ShowUserTitle = ({ record }) => {
  return <span> {record ? ` : ${record.name}` : ''}</span>;
};

const RecordShow = props => (
  <Show title={<ShowUserTitle />} {...props}>
    <SimpleShowLayout>
      <TextField source="name" />
      <TextField source="nickname" />
      <TextField source="locale" />
      <TextField source="description" />
    </SimpleShowLayout>
  </Show>
);

export const UserList = (props) => (
  <List {...props} bulkActionButtons={<PostBulkActionButtons />} filters={<ListFilter />} >
    <Datagrid expand={<RecordShow />}>
      <TextField source="id" />
      <TextField source="username" />
      <TextField source="name" />
      <TextField source="email" />
      <TextField source="product" />
      <TextField source="url" />
      <TextField source="locale" />
      <EditButton basePath="/users" />
    </Datagrid>
  </List>
);

const EditUserTitle = ({ record }) => {
  return <span>User {record ? `"${record.name}"` : ''}</span>;
};

export const UserEdit = (props) => (
  <Edit title={<EditUserTitle />} {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="username" />
      <TextInput source="name" />
      <TextInput source="first_name" />
      <TextInput source="last_name" />
      <TextInput source="email" type="email" />
      <TextInput source="url" />
      <ReferenceInput label="Products" source="product" reference="posts" perPage={100}>
        <SelectInput optionText="id" editable />
      </ReferenceInput>
      <TextInput source="description" />
      <TextInput source="locale" />
      <TextInput source="nickname" />
      <TextInput source="slug" />
    </SimpleForm>
  </Edit>
);
