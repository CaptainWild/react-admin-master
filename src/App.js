import React from 'react';
import { Admin, Resource } from 'react-admin';
// import restProvider from 'ra-data-simple-rest';
import jsonServerProvider from 'ra-data-json-server';
import authProvider from './components/authentication/authProvider';
import dataProvider from './components/data/dataProvider';

import { UserList, UserEdit, UserIcon } from './components/users';
import { ProductList, ProductEdit, ProductShow, ProductCreate, ProductIcon } from './components/products';

function App() {
  return (
    // <Admin dataProvider={jsonServerProvider('https://jsonplaceholder.typicode.com')} authProvider={authProvider}>
    <Admin dataProvider={dataProvider} authProvider={authProvider}>
      <Resource name='users' list={UserList} edit={UserEdit} icon={UserIcon} />
      <Resource name='posts' options={{ label: 'Products' }} list={ProductList} edit={ProductEdit} show={ProductShow} create={ProductCreate} icon={ProductIcon} />
    </Admin>
  );
}

export default App;
