import  WP from 'wpapi'

export default {
    login: ({ username, password }) => {
        const wp = new WP({
            endpoint: 'https://geneiumcom.wpcomstaging.com/wp-json',
            username,
            password,
        });
        return wp.users().me().then(result => {
            localStorage.removeItem('not_authenticated');
            localStorage.setItem('auth_header', btoa(`${username}:${password}`));
            return result;
        }).catch(err => {
            console.log('Login error:', err);
            throw new Error(err.message);
        });
    },
    logout: () => {
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