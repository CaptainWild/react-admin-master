import * as React from 'react';
import { Fragment } from 'react';
import { Filter, List, Datagrid, Edit, SimpleForm, TextField, EditButton, TextInput, SearchInput, ReferenceInput, SelectInput, BulkDeleteButton } from 'react-admin';
import GroupIcon from '@material-ui/icons/Group';
import ResetViewsButton from './resetViewButton';

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
    <TextInput source="name" alwaysOn />
    <SearchInput source="url" defaultValue="Please input url" />
    <SearchInput source="locale" defaultValue="Please input locale" />
  </Filter>
);

export const UserList = (props) => (
  <List {...props} bulkActionButtons={<PostBulkActionButtons />} filters={<ListFilter />}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="username" />
      <TextField source="name" />
      <TextField source="first_name" />
      <TextField source="last_name" />
      <TextField source="email" />
      <TextField source="url" />
      <TextField source="description" />
      <TextField source="locale" />
      <TextField source="nickname" />
      <TextField source="slug" />
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
      <ReferenceInput label="Products" source="title" reference="posts" >
        <SelectInput optionText="body" optionValue="id" />
      </ReferenceInput>
      <TextInput source="description" />
      <TextInput source="locale" />
      <TextInput source="nickname" />
      <TextInput source="slug" />
    </SimpleForm>
  </Edit>
);
