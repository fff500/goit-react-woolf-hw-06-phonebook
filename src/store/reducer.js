import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';

import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';

const persistConfig = {
  key: 'contacts',
  storage,
}

const persistedContactsReducer = persistReducer(persistConfig, contactsReducer);

export const reducer = {
  contacts: persistedContactsReducer,
  filter: filterReducer,
};