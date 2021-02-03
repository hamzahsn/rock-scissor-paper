import { createStore, compose } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import rootReducer from './reducers/rootReducer'

const persistConfig = {
  key: 'root',
  storage
}

const composeEnhancers = (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose
const persistedReducer = persistReducer(persistConfig, rootReducer)

export type RootState = ReturnType<typeof rootReducer>
export const store = createStore(persistedReducer, composeEnhancers())
export const persistor = persistStore(store)
