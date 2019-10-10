import { createStore } from 'redux';

import rootReducer from './reducers';

const configureStore = initialState => {
  const store = createStore(rootReducer, initialState);
  return store;
};

const store = configureStore();
export default store;
