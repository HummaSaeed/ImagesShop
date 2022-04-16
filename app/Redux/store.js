import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import Reducer from './Reducer';
import {persistStore, persistReducer} from "redux-persist";
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
    key: "root",
    storage: AsyncStorage,
};
const persistedReducer = persistReducer(persistConfig, Reducer);
const rootReducer = combineReducers({ Reducer });
export const Store = createStore(persistedReducer, applyMiddleware(thunk));
const persistor = persistStore(Store);
export default Store;
export {persistor}; 