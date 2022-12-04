import React from 'react';
import Plot from 'react-plotly.js';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

import { useGetNewsTrendsQuery } from "../app/newsApi";

// NewsTrendChart가 받는 property가 무엇무엇인지 여기서 선언해 주고, 얘를 넘긴다.
interface IProps {
    search: string;
}


export default function NewsTrendChart({search}: IProps) { // 위에서 선언된 값을 여기서 받아서 사용함
    const {data, isLoading} = useGetNewsTrendsQuery({search}); // search를 받아라!

    // 로딩중이거나 데이터가 없을 때 로딩중 아이콘(동그라미 도는 것) 보이도록 하기
    if (isLoading || !data) { 
        return (
            <Box sx={{ p: 3, textAlign:"center"}}>
                <CircularProgress />
            </Box>
        );
    }

    // console.log("isLoading", isLoading);
    // console.log("data", data);

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
            layout={ {autosize: true}}
            style={{width: "100%"}}
        />
    );
}