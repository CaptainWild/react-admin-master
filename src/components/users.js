import * as React from 'react';
import { List, Datagrid, Edit, Create, SimpleForm, TextField, EditButton, TextInput } from 'react-admin';
import GroupIcon from '@material-ui/icons/Group';

export const UserIcon = GroupIcon;

export const UserList = (props) => (
  <List {...props}>
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
      <TextInput source="description" />
      <TextInput source="locale" />
      <TextInput source="nickname" />
      <TextInput source="slug" />
    </SimpleForm>
  </Edit>
);

export const UserCreate = (props) => (
  <Create title="Create a User" {...props}>
    <SimpleForm>
      <TextInput source="username" />
      <TextInput source="name" />
      <TextInput source="first_name" />
      <TextInput source="last_name" />
      <TextInput source="email" type="email" />
      <TextInput source="url" />
      <TextInput source="description" />
      <TextInput source="locale" />
      <TextInput source="nickname" />
      <TextInput source="slug" />
    </SimpleForm>
  </Create>
);
