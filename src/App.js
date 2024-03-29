import React from 'react';
import { Admin, Resource } from 'react-admin';
import authProvider from './components/authentication/authProvider';
import dataProvider from './components/data/dataProvider';

import { UserList, UserEdit, UserIcon } from './components/users';
import { ProductList, ProductEdit, ProductShow, ProductCreate, ProductIcon } from './components/products';

function App() {
  return (
    <Admin dataProvider={dataProvider} authProvider={authProvider}>
      <Resource name='users' list={UserList} edit={UserEdit} icon={UserIcon} />
      <Resource name='products' list={ProductList} edit={ProductEdit} show={ProductShow} create={ProductCreate} icon={ProductIcon} />
    </Admin>
  );
}

export default App;
