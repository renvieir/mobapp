import React from 'react';
import { fetchUtils, Admin, Resource, ListGuesser } from 'react-admin';
import drfProvider from 'ra-data-drf';
// import {UserList} from './Users';

const httpClient = (url, options = {}) => {
    if (!options.headers) {
        options.headers = new Headers({
          Accept: 'application/json',
          // Authorization: 'Basic cnZpZWlyYTpxd2VyMTIzNA==',
        });
    }
    return fetchUtils.fetchJson(url, options);
};
const apiUrl = 'http://localhost:8000/api/v1'
const dataProvider = drfProvider(apiUrl, httpClient);
const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="records" list={ListGuesser}></Resource>
  </Admin>
);

export default App;