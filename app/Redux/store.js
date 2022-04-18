import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import Reducer from './Reducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['memoriese']
  };

const rootReducer = combineReducers({
    Reducer: persistReducer(persistConfig, Reducer)
  });
export const Store = createStore(rootReducer, applyMiddleware(thunk));
export default Store;
export const persistor = persistStore(Store);