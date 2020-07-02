import React from 'react';
import { Create, TabbedForm, FormTab, TextInput, DateInput, SelectInput } from 'react-admin';
import RichTextInput from 'ra-input-rich-text';
import { Grid, Card, CardContent, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

const editStyles = makeStyles({
  root: {
      opacity: 0.87,
      whiteSpace: 'nowrap',
  },
  info: {
    width: '1000px',
    paddingLeft: '50px',
  },
  image: {
    height: '240px',
    width: '300px',
    borderRadius: 10,
    margin: '50px',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  description: {
    padding: '30px',
    width: '60%',
    height: '200px',
  },
  technicalInfo: {
    width: 700,
    marginLeft: 50,
  },
  input: {
    marginLeft: 30,
    width: '300px',
  },
  selectInput: {
    width: '300px',
  },
});

const ingredientChoices = [
  { id: 'peptide', name: 'Peptide' },
  { id: 'other', name: 'Other' },
];

const skinCareChoices = [
  { id: 'sunProtection', name: 'Sun Protection' },
  { id: 'fineLinesWrinkles', name: 'Fine Lines & Wrinkles' },
  { id: 'collagen', name: 'Collagen' },
];

const applicationChoices = [
  { id: 'topical', name: 'Topical' },
  { id: 'supplement', name: 'Supplement' },
];

const productChoices = [
  { id: 'exfoliant', name: 'Exfoliant' },
  { id: 'antioxidant', name: 'Antioxidant' },
  { id: 'faceOil', name: 'Face Oil' },
  { id: 'moisturizer', name: 'Moisturizer' },
  { id: 'sunScreen', name: 'Sun Screen' },
  { id: 'Toner', name: 'Toner' },
  { id: 'eyeCream', name: 'Eye Cream' },
  { id: 'serum', name: 'Serum' },
];

export const ProductCreate = (props) => {
  const classes = editStyles();

  return (
    <Create title='Create a New Product' {...props}>
      <TabbedForm>
        <FormTab label='SUMMARY'>
          <Grid container className={classes.info}>
            <Grid item >
              <img alt='product' src='/images/product.png' className={classes.image} />
            </Grid>
            <Grid item  xs={12} sm style={{padding: 40}}>
              <Card>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant='h5'
                    component='h2'
                    style={{paddingLeft: 50}}
                  >
                    INFORMATION
                  </Typography>
                  <TextInput source='title' className={classes.input} />
                  <TextInput label='Product Link' source='link' className={classes.input} />
                  <DateInput label='Production Date' source='created_at' className={classes.input} />
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </FormTab>
        <FormTab label='TECHNICAL INFORMATION'>
          <Typography
            gutterBottom
            variant='h5'
            component='h2'
            style={{paddingLeft: 100, paddingTop: 50, paddingBottom: 30}}
          >
            SELECT CATEGORY
          </Typography>
          <Grid container spacing={3} className={classes.technicalInfo}>
            <Grid item xs={6}>
              <SelectInput source='ingredient' choices={ingredientChoices} className={classes.selectInput} />
            </Grid>
            <Grid item xs={6}>
              <SelectInput source='category_skinCare' choices={skinCareChoices} className={classes.selectInput} />
            </Grid>
            <Grid item xs={6}>
              <SelectInput source='category_application' choices={applicationChoices} className={classes.selectInput} />
            </Grid>
            <Grid item xs={6}>
              <SelectInput source='category_product' choices={productChoices} className={classes.selectInput} />
            </Grid>
          </Grid>
        </FormTab>
        <FormTab label='DESCRIPTION'>
          <div className={classes.description}>
            <RichTextInput source='description' label='' />
          </div>
        </FormTab>
      </TabbedForm>
    </Create>
  )
};
