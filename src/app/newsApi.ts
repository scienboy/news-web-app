import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import * as t from "./types";


export const newsApi = createApi({
    reducerPath: "news-api",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://7nemkpdlba.execute-api.ap-northeast-2.amazonaws.com/dev/",
    }),
    endpoints: (builder) => ({

        // t.NewsTrends 타입 형태로 return이 올거라는걸 알려주는 것
        getNewsTrends: builder.query<t.NewsTrends, t.SearchReqParams>({ // <> 안에 return type과 input type을 지정해 줌
            query: ({search}) => `news_trends?search=${search}`, // 해당 search를 파라미터로 받아서 요청을 보낼 때
            // query: () => 'news_trends',
        }),

        getSentimentTrends: builder.query<t.SentimentTrends, t.SearchReqParams>({ // <> 안에 return type과 input type을 지정해 줌
            query: ({search}) => `sentiment_trends?search=${search}`, // 해당 search를 파라미터로 받아서 요청을 보낼 때
        }),
    }),
});

// API 추가!
export const {
    useGetNewsTrendsQuery,
    useGetSentimentTrendsQuery
} = newsApi;
