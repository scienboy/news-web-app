import * as React from 'react';
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";


import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';

import NewsTrendChart from './NewsTrendChart';
import SentimentTrendChart from './SentimentTrendChart';


export default function Content() {

  // const [searchText, setSearchText] = useState(""); 
  const navigate = useNavigate();
  const { pathname, search} = useLocation();

  const params = new URLSearchParams(search); // URLSearchParams는 브라우저에서 제공하는 API. 파라미터를 파싱할 수 있음
  const searchText = params.get("search") || ""; // 아니면 문자열 ""을 넣어라

  const [inputText, setInputText] = useState(searchText); 
  // 리액트 개발 시 state variable과 그냥 variable의 차이점을 잘 이해해야 함.
  // state variable: 리액트가 관리하는 변수. 그래서 state variable을 변경하면 리액트가 다시 그림.
  // 그냥 variable: 리액트가 관리하지 않는 변수. 그래서 그냥 variable을 변경해도 리액트가 다시 그리지 않음.
  // inputText("hello"); // 이렇게 하면 리액트가 다시 그리지 않음. 그래서 state variable을 변경해야 함.
  // setInputText("hello"); // 이렇게 함수 호출 통해 값을 바꿔야 함


  // console.log("pathname", pathname);
  // console.log("search", search);

  function onSearch() {
    // console.log('inputText', inputText);
    // setSearchText(inputText);

    // search 버튼을 누르면 url이 업데이트 됨
    let url = pathname;
    if (inputText) {
      url += `?search=${inputText}`;
    }
    navigate(url); 
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
                onKeyDown={(e) => { // 키가 눌릴 때 이벤트 e 발생하도록 함
                  if (e.key === 'Enter') { // 검색창에서 입력된 키가 엔터면
                    onSearch(); // onSearch 함수 호출. 함수를 실행해라
                  }
                }}
              />
            </Grid>
            <Grid item>
              <Button 
                variant="contained" sx={{ mr: 1 }}
                onClick={onSearch}                  // Search 버튼 클릭 시 onSearch function 동작. onSearch()와 같이 함수실행 형태로 주지 않은 이유는, 함수 자체를 넘겨주는 방식이기 때문
              >
                Search
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      {
        pathname === '/news-trends' ? (             // if url이 news-trends면
          <NewsTrendChart search={searchText} />
        ) : (                           // else     // else면
          <SentimentTrendChart search={searchText} />
        )
      }
      {/* <NewsTrendChart search={searchText}/> */}
      {/* <NewsTrendChart/> */}
    </Paper>
  );
}
