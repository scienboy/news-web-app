import * as React from 'react';
import { useState } from "react";


import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';

import NewsTrendChart from './NewsTrendChart';


export default function Content() {

  const [inputText, setInputText] = useState(""); 
  // 리액트 개발 시 state variable과 그냥 variable의 차이점을 잘 이해해야 함.
  // state variable: 리액트가 관리하는 변수. 그래서 state variable을 변경하면 리액트가 다시 그림.
  // 그냥 variable: 리액트가 관리하지 않는 변수. 그래서 그냥 variable을 변경해도 리액트가 다시 그리지 않음.
  // inputText("hello"); // 이렇게 하면 리액트가 다시 그리지 않음. 그래서 state variable을 변경해야 함.
  // setInputText("hello"); // 이렇게 함수 호출 통해 값을 바꿔야 함

  function onSearch() {
    console.log('inputText', inputText);
  }


  return (
    <Paper sx={{ maxWidth: 936, margin: 'auto', overflow: 'hidden' }}>
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}
      >
        <Toolbar>
          <Grid container spacing={2} alignItems="center">
            <Grid item>
              <SearchIcon color="inherit" sx={{ display: 'block' }} />
            </Grid>
            <Grid item xs>
              <TextField
                fullWidth
                placeholder="Search by keywords"
                InputProps={{
                  disableUnderline: true,
                  sx: { fontSize: 'default' },
                }}
                variant="standard"
                value={inputText}
                onChange={(e) => {
                  // event handler
                  setInputText(e.target.value); // 내가 입력한 텍스트의 값이 e.target.value에 들어있음
                }} // 변수가 아니라 함수를 넣어줌
              />
            </Grid>
            <Grid item>
              <Button 
                variant="contained" sx={{ mr: 1 }}
                onClick={onSearch}                  // Search 버튼 클릭 시 onSearch function 동작
              >
                Search
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <NewsTrendChart />
    </Paper>
  );
}
