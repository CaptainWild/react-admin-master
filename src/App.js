import * as React from 'react';
import { Admin, Resource } from 'react-admin';
import restProvider from 'ra-data-simple-rest';

import { UserList, UserEdit, UserCreate, UserIcon } from './components/users';

function App() {
  return (
    <Admin dataProvider={restProvider('http://localhost:3000')}>
      <Resource name="users" list={UserList} edit={UserEdit} create={UserCreate} icon={UserIcon}/>
    </Admin>
  );
}

export default App;
