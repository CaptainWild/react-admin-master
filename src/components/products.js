import * as React from 'react';
import { Fragment } from 'react';
import { List, Datagrid, Create, SimpleForm, TextField, TextInput, BulkDeleteButton } from 'react-admin';
import WorkIcon from '@material-ui/icons/Work';
import ResetViewsButton from './resetViewButton';

const PostBulkActionButtons = props => (
	<Fragment>
		<ResetViewsButton component="posts" {...props} />
		{/* default bulk delete action */}
		<BulkDeleteButton {...props} />
	</Fragment>
);

export const ProductIcon = WorkIcon;

export const ProductList = (props) => (
  <List {...props} bulkActionButtons={<PostBulkActionButtons />}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="title" />
      <TextField source="body" />
      <TextField source="price" />
      <TextField source="slug" />
    </Datagrid>
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
