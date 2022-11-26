import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const newsApi = createApi({
    reducerPath: "news-api",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://7nemkpdlba.execute-api.ap-northeast-2.amazonaws.com/dev/",
                  
    }),
    endpoints: (builder) => ({
        getNewsTrends: builder.query<any, void>({ // <> 안에 return type과 input type을 지정해 줌
            query: () => 'news_trends',
        }),
    }),
});

// API 추가!
export const {
    useGetNewsTrendsQuery
} = newsApi;
