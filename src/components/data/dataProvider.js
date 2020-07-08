import { fetchUtils } from 'react-admin';
import { stringify } from 'query-string';

const apiUrl = 'https://geneiumcom.wpcomstaging.com/wp-json/wp/v2';
const httpClient = fetchUtils.fetchJson;

export default {
  getList: (resource, params) => {
    const authHeader = localStorage.getItem('auth_header');
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;
    const search = params.filter?.q ? params.filter.q : '';
    const query = {
      search,
      page: JSON.stringify(page),
      per_page: JSON.stringify(perPage),
      orderby: field,
      order: order.toLowerCase(),
    };
    const url = `${apiUrl}/${resource}?${stringify(query)}`;

    return httpClient(url, {
      method: 'GET',
      headers: new Headers({ authorization: `Basic ${authHeader}`}),
    }).then(({ headers, json }) => {

      return {
        data: json,
        total: parseInt(10),
      }
    });
  },

  getOne: (resource, params) => {
    const authHeader = localStorage.getItem('auth_header');
    return httpClient(`${apiUrl}/${resource}/${params.id}`, {
      method: 'POST',
      headers: new Headers({ authorization: `Basic ${authHeader}`}),
    }).then(({ json }) => {
        return {
          data: json,
        }
    })
    .catch((error) => console.log(error));
  },
  getMany: (resource, params) => {
    const authHeader = localStorage.getItem('auth_header');
    const query = {
        include: JSON.stringify(params.ids),
    };
    const url = `${apiUrl}/${resource}?${stringify(query)}`;
    return httpClient(url, {
      method: 'GET',
      headers: new Headers({ authorization: `Basic ${authHeader}`}),
    }).then(({ json }) => ({ data: json }));
  },

  getManyReference: (resource, params) => {
    const authHeader = localStorage.getItem('auth_header');
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;
    const query = {
      sort: JSON.stringify([field, order]),
      range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
      filter: JSON.stringify({
        ...params.filter,
        [params.target]: params.id,
      }),
    };
    const url = `${apiUrl}/${resource}?${stringify(query)}`;

    return httpClient(url, {
      method: 'GET',
      headers: new Headers({ authorization: `Basic ${authHeader}`}),
    }).then(({ headers, json }) => ({
      data: json,
      total: parseInt(headers.get('content-range').split('/').pop(), 10),
    }));
  },

  update: (resource, params) => {
    const authHeader = localStorage.getItem('auth_header');
    return httpClient(`${apiUrl}/${resource}/${params.id}`, {
      method: 'POST',
      body: JSON.stringify(params.data),
      headers: new Headers({ authorization: `Basic ${authHeader}`}),
    }).then(({ json }) => ({ data: json }));
  },

  updateMany: (resource, params) => {
    const authHeader = localStorage.getItem('auth_header');
    const query = {
      filter: JSON.stringify({ id: params.ids}),
    };
    return httpClient(`${apiUrl}/${resource}?${stringify(query)}`, {
      method: 'PUT',
      body: JSON.stringify(params.data),
      headers: new Headers({ authorization: `Basic ${authHeader}`}),
    }).then(({ json }) => ({ data: json }));
  },

  create: (resource, params) => {
    const authHeader = localStorage.getItem('auth_header');
    return httpClient(`${apiUrl}/${resource}`, {
      method: 'POST',
      body: JSON.stringify(params.data),
      headers: new Headers({ authorization: `Basic ${authHeader}`}),
    }).then(({ json }) => ({
      data: { ...params.data, id: json.id },
    }))
  },

  delete: (resource, params) => {
    const authHeader = localStorage.getItem('auth_header');
    return httpClient(`${apiUrl}/${resource}/${params.id}`, {
      method: 'DELETE',
      headers: new Headers({ authorization: `Basic ${authHeader}`}),
    }).then(({ json }) => ({ data: json }))
  },

  deleteMany: (resource, params) => {
    const authHeader = localStorage.getItem('auth_header');
    const query = {
      filter: JSON.stringify({ id: params.ids}),
    };
    return httpClient(`${apiUrl}/${resource}?${stringify(query)}`, {
      method: 'DELETE',
      body: JSON.stringify(params.data),
      headers: new Headers({ authorization: `Basic ${authHeader}`}),
    }).then(({ json }) => ({ data: json }));
  },
};
