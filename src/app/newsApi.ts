import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import * as t from "./types";


export const newsApi = createApi({
    reducerPath: "news-api",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://7nemkpdlba.execute-api.ap-northeast-2.amazonaws.com/dev/",
    }),
    endpoints: (builder) => ({
        
        // t.NewsTrends 타입 형태로 return이 올거라는걸 알려주는 것
        getNewsTrends: builder.query<t.NewsTrends, void>({ // <> 안에 return type과 input type을 지정해 줌
            query: () => 'news_trends',
        }),
    }),
});

// API 추가!
export const {
    useGetNewsTrendsQuery
} = newsApi;
