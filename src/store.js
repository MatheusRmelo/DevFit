import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-community/async-storage'

import rootReducer from './reducers'

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['userReducer']
}

const pReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(pReducer)
let persistor = persistStore(store)

export {store, persistor}
