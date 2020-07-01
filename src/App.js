import React from 'react';
import { Admin, Resource } from 'react-admin';
import restProvider from 'ra-data-simple-rest';
// import jsonServerProvider from 'ra-data-json-server';

import { UserList, UserEdit, UserIcon } from './components/users';
import { ProductList, ProductEdit, ProductShow, ProductCreate, ProductIcon } from './components/products';

function App() {
  return (
    <Admin dataProvider={restProvider('http://localhost:3000')}>
      <Resource name="users" list={UserList} edit={UserEdit} icon={UserIcon} />
      <Resource name="products" list={ProductList} edit={ProductEdit} show={ProductShow} create={ProductCreate} icon={ProductIcon} />
    </Admin>
  );
}

export default App;
