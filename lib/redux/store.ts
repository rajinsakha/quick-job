import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import { setupListeners } from "@reduxjs/toolkit/query";
import storage from "redux-persist/lib/storage";
import authReducer from "./features/authReducer";
import filterReducer from "./features/filterReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["authReducer"], // Specify the reducer(s) you want to persist
};

const rootReducer = combineReducers({
  authReducer: authReducer,
  filterReducer: filterReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
