import React  from 'react';
import { Filter, List, Datagrid, Edit, TabbedForm, FormTab, TextField, EditButton, TextInput, SearchInput, ReferenceInput, SelectInput, BulkDeleteButton } from 'react-admin';
import GroupIcon from '@material-ui/icons/Group';
import { Grid, Avatar, Typography, Card, CardContent } from '@material-ui/core';
import RichTextInput from 'ra-input-rich-text';
import { makeStyles } from '@material-ui/core';

import ResetViewsButton from '../others/resetViewButton';
import RecordShow from './recordShow';
import StarRatingField from '../others/starRatingField';
import StarRatingInput from '../others/starRatingInput';
export const UserIcon = GroupIcon;

const editStyles = makeStyles({
  root: {
      opacity: 0.87,
      whiteSpace: 'nowrap',
  },
  personalInfo: {
    width: '1000px',
    paddingLeft: '50px',
  },
  avatar: {
    height: '240px',
    width: '200px',
    margin: '50px',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  description: {
    paddingLeft: '30px',
    width: '60%',
    height: '200px',
  },
  additionalCard: {
    padding: '30px',
  },
  input: {
    marginLeft: 30,
    width: '300px',
  },
});

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

const EditUserTitle = ({ record }) => {
  return <span>User {record ? `"${record.name}"` : ''}</span>;
};

export const UserEdit = (props) => {
  const classes = editStyles();

  return (
    <Edit title={<EditUserTitle />} {...props}>
      <TabbedForm>
        <FormTab label='PERSONAL INFO'>
          <Grid container className={classes.personalInfo}>
            <Grid item >
              <Avatar src='./images/avatar_sample.png' className={classes.avatar} />
            </Grid>
            <Grid item  xs={12} sm style={{padding: 40}}>
              <Card>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Personal Info
                  </Typography>
                  <TextInput source='username' className={classes.input} />
                  <TextInput source='first_name' className={classes.input} />
                  <TextInput source='last_name' className={classes.input} />
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </FormTab>
        <FormTab label='ADDITIONAL INFO'>
          <Grid container className={classes.personalInfo} spacing={3}>
            <Grid item xs={12} sm style={{padding: '35px'}}>
              <Card>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Email and Address
                  </Typography>
                  <TextInput source='email' type='email' className={classes.input} />
                  <TextInput label='Location' source='locale' className={classes.input} />
                  <TextInput source='url' className={classes.input} />
                </CardContent>
              </Card>
            </Grid>
            <Grid item  xs={12} sm style={{padding: '35px'}}>
              <Card>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Other Info
                  </Typography>
                  <ReferenceInput label='Products' source='product' reference='posts' perPage={100} className={classes.input}>
                    <SelectInput optionText='id' editable />
                  </ReferenceInput>
                  <TextInput source='nickname' className={classes.input} />
                  <TextInput source='slug' className={classes.input} />
                  <StarRatingInput
                    source='rating'
                    className={classes.input}
                  />
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </FormTab>
        <FormTab label='DESCRIPTION'>
          <div className={classes.description}>
            <RichTextInput source='description' label='' />
          </div>
        </FormTab>
      </TabbedForm>
    </Edit>
  )
};
