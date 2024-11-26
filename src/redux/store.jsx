import { configureStore } from "@reduxjs/toolkit"
import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage" // Default: localStorage for web
import authReducer from "./slices/authSlice"
import loadingReducer from "./slices/loadingSlice"
import errorReducer from "./slices/errorSlice"
import notificationReducer from "./slices/notificationSlice"
import { combineReducers } from "redux"

// Persist configuration for the `auth` reducer
const authPersistConfig = {
  key: "auth",
  storage,
}

// Combine reducers
const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer), // Only persist `auth`
  loading: loadingReducer,
  error: errorReducer,
  notification: notificationReducer,
})

// Configure store
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          "persist/PERSIST",
          "persist/REHYDRATE",
          "persist/REGISTER",
          "persist/FLUSH",
          "persist/PAUSE",
          "persist/PURGE",
        ],
      },
    }),
})

// Persistor setup
export const persistor = persistStore(store)
export default store
