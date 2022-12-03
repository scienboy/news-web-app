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
   
    return (
        <Plot
            data={[
                {
                    x: [1, 2, 3],
                    y: [2, 6, 3],
                    type: 'scatter',
                    mode: 'lines+markers',
                    marker: {color: 'red'},
                },
                {
                    type: 'bar', x: [1, 2, 3], y: [2, 5, 3]
                },
            ]}
            layout={ {width: 320, height: 240, title: 'A Fancy Plot'} }
        />
    );
}