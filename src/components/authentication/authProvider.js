import  WP from 'wpapi'
import { fetchUtils } from 'react-admin';
const httpClient = fetchUtils.fetchJson;

export default {
  login: ({ username, password }) => {
    const wp = new WP({
      endpoint: 'https://geneiumcom.wpcomstaging.com/wp-json',
      username,
      password,
    });
    const authHeader = btoa(`${username}:${password}`);
    return wp.users().me().then(result => {
      return httpClient(`https://geneiumcom.wpcomstaging.com/wp-json/wp/v2/users/${result.id}`, {
        method: 'POST',
        headers: new Headers({ authorization: `Basic ${authHeader}`}),
        }).then(({ json: { roles } }) => {
          roles.map(role => {
            localStorage.setItem('not_authenticated', true);
            if (role === 'administrator') {
              localStorage.removeItem('not_authenticated');
              localStorage.setItem('auth_header', authHeader);
              return result;
            }
            return role;
          })
          if (localStorage.getItem('not_authenticated')) {
            throw new Error('noAdmin');
          }
        })
        .catch((error) => {
          console.log(error)
          throw new Error('noAdmin')
        });
      }).catch(err => {
        console.log(err);
        if (err.message === 'noAdmin') {
          return Promise.reject('Please login with admin credentials.');
        }
        return Promise.reject('Login Failed, Please input correct Username/Password.');
      });
    },
    logout: () => {
      localStorage.removeItem('auth_header');
      localStorage.setItem('not_authenticated', true);
      return Promise.resolve();
    },
    checkError: ({ status }) => {
      return status === 401 || status === 403
        ? Promise.reject()
        : Promise.resolve();
    },
    checkAuth: () => {
      return localStorage.getItem('not_authenticated')
        ? Promise.reject()
        : Promise.resolve();
    },
    getPermissions: () => {
      const role = localStorage.getItem('role');
      return Promise.resolve(role);
    },
};