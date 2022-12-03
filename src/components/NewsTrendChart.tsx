import React from 'react';
import Plot from 'react-plotly.js';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

import { useGetNewsTrendsQuery } from "../app/newsApi";


export default function NewsTrendChart() {
    const {data, isLoading} = useGetNewsTrendsQuery();

    // 로딩중이거나 데이터가 없을 때 로딩중 아이콘(동그라미 도는 것) 보이도록 하기
    if (isLoading || !data) { 
        return (
            <Box sx={{ p: 3, textAlign:"center"}}>
                <CircularProgress />
            </Box>
        );
    }

    console.log("isLoading", isLoading);
    console.log("data", data);

    const trace: Plotly.Data = {
        x: data.trends.map(el => el.date),
        y: data.trends.map(el => el.doc_count),
        type: "scatter",
        mode: "lines+markers",
    }
   
    return (
        // Plot은 항상 목록을 받음. 그러므로 대괄호 안에 넣어줘야 함 e.g. [trace]
        <Plot
            data={[trace]}
            layout={ {width: 320, height: 240, title: 'A Fancy Plot'} }
        />
    );
}