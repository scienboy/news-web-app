import React from 'react';
import Plot from 'react-plotly.js';
import CircularProgress from '@mui/material/CircularProgress';

import { useGetNewsTrendsQuery } from "../app/newsApi";


export default function NewsTrendChart() {
    const {data, isLoading} = useGetNewsTrendsQuery();

    if (isLoading) {
        return <CircularProgress />;
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