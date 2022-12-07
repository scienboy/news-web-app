import React from 'react';
import Plot from 'react-plotly.js';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

import { useGetSentimentTrendsQuery } from "../app/newsApi";
import { trace } from 'console';

import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

// NewsTrendChart가 받는 property가 무엇무엇인지 여기서 선언해 주고, 얘를 넘긴다.
interface IProps {
    search: string;
}


// export default function NewsTrendChart() { // 위에서 선언된 값을 여기서 받아서 사용함
export default function SentimentTrendChart({search}: IProps) { // 위에서 선언된 값을 여기서 받아서 사용함
    // const {data, isLoading} = useGetNewsTrendsQuery({search: ""}); // search를 받아라!
    const {data, isLoading} = useGetSentimentTrendsQuery({search}); // search를 받아라!
    const [alignment, setAlignment] = React.useState('web');


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

    // const trace1: Plotly.Data = {
    //     x: data.trends.map((el) => el.date),
    //     y: data.trends.map((el) => el.positive),
    //     type: "scatter",
    //     mode: "lines+markers",
    // }

    // const trace2: Plotly.Data = {
    //     x: data.trends.map((el) => el.date),
    //     y: data.trends.map((el) => el.neutral),
    //     type: "scatter",
    //     mode: "lines+markers",
    // }

    // const trace3: Plotly.Data = {
    //     x: data.trends.map((el) => el.date),
    //     y: data.trends.map((el) => el.negative),
    //     type: "scatter",
    //     mode: "lines+markers",
    // }


    const traces: Plotly.Data[] = ["positive", "neutral", "negative"].map(
        (x) => ({
            x: data.trends.map((el) => el.date),
            y: data.trends.map((el) => (el as any)[x]), // 타입에 대해 너무 깐깐하게 굴지마. 일종의 치트키 (모든 타입에 대해 상관없이 받겠다. 타입검사하지마)
            type: "scatter",
            mode: "lines+markers",
            name: x
        }),
    );
    

    const handleChange = (
      event: React.MouseEvent<HTMLElement>,
      newAlignment: string,
    ) => {
      setAlignment(newAlignment);
    };

    return (
        // pt: 3은 padding-top: 3
        <Box sx={{ display: "grid", pt: 3}}> 
          <ToggleButtonGroup
                color="primary"
                value={alignment}
                exclusive
                onChange={handleChange}
                aria-label="Platform"
                sx={{
                    mx: "auto", // margin-x
                }}
                >
                <ToggleButton value="doc-count">Doc Count</ToggleButton>
                <ToggleButton value="score">Sentiment Score</ToggleButton>
            </ToggleButtonGroup>
                
            {/* // Plot은 항상 목록을 받음. 그러므로 대괄호 안에 넣어줘야 함 e.g. [trace] */}
            <Plot
                data={traces}
                layout={ {autosize: true}}
                style={{width: "100%"}}
            />
        </Box>
    );
}