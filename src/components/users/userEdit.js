import React  from 'react';
import { Edit, TabbedForm, FormTab, TextInput, DateInput, ReferenceArrayInput, useGetList, Toolbar, SaveButton } from 'react-admin';
import { Grid, Typography, Card, CardContent } from '@material-ui/core';
import RichTextInput from 'ra-input-rich-text';
import { makeStyles } from '@material-ui/core';
import AvatarField from './common/avatarField';
import StarRatingInput from '../others/starRatingInput';
import { StyledSelectArrayInput } from '../others/styledSelectArrayInput';

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
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
});

const CustomToolbar = props => (
  <Toolbar {...props} >
      <SaveButton />
  </Toolbar>
);

const EditUserTitle = ({ record }) => {
  return <span>User {record ? `"${record.name}"` : ''}</span>;
};

export const UserEdit = (props) => {
  const classes = editStyles();
  const { total } = (useGetList('posts', {page: 1, perPage: 1}, {field: 'title', order: 'DESC'}));

  return (
    <Edit title={<EditUserTitle />} {...props}>
      <TabbedForm toolbar={<CustomToolbar className={classes.toolbar} />}>
        <FormTab label='PERSONAL INFO'>
          <Grid container className={classes.personalInfo}>
            <Grid item >
              <AvatarField source='avatar_urls' />
            </Grid>
            <Grid item  xs={12} sm style={{padding: 40}}>
              <Card>
                <CardContent>
                  <Typography gutterBottom variant='h5' component='h2'>
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
                  <Typography gutterBottom variant='h5' component='h2'>
                    Email and Address
                  </Typography>
                  <TextInput source='email' type='email' className={classes.input} />
                  <TextInput label='Location' source='locale' className={classes.input} />
                  <DateInput source='registered_date' className={classes.input} />
                </CardContent>
              </Card>
            </Grid>
            <Grid item  xs={12} sm style={{padding: '35px'}}>
              <Card>
                <CardContent>
                  <Typography gutterBottom variant='h5' component='h2'>
                    Other Info
                  </Typography>
                  <ReferenceArrayInput label='Products' source='product' reference='products' perPage={total} className={classes.input}>
                    <StyledSelectArrayInput optionText='title' />
                  </ReferenceArrayInput>
                  <TextInput source='nickname' className={classes.input} />
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
