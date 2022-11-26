import {configureStore} from '@reduxjs/toolkit';

import {newsApi} from "./newsApi";

export const store = configureStore({
    reducer: {
        [newsApi.reducerPath]: newsApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(newsApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
