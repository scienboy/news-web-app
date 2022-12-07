import { useNavigate, useLocation } from "react-router-dom"

import * as React from 'react';
import Divider from '@mui/material/Divider';
import Drawer, { DrawerProps } from '@mui/material/Drawer';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import { NEWS_TRENDS_PATH, SENTIMENT_TRENDS_PATH } from "../App";

import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import DnsRoundedIcon from '@mui/icons-material/DnsRounded';
import PermMediaOutlinedIcon from '@mui/icons-material/PhotoSizeSelectActual';
import PublicIcon from '@mui/icons-material/Public';
import SettingsEthernetIcon from '@mui/icons-material/SettingsEthernet';
import SettingsInputComponentIcon from '@mui/icons-material/SettingsInputComponent';
import TimerIcon from '@mui/icons-material/Timer';
import SettingsIcon from '@mui/icons-material/Settings';
import PhonelinkSetupIcon from '@mui/icons-material/PhonelinkSetup';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import FavoriteIcon from '@mui/icons-material/Favorite';

const item = {
  py: 2,
  px: 2,
  color: 'rgba(255, 255, 255, 0.7)',
};

const itemCategory = {
  boxShadow: '0 -1px 0 rgb(255,255,255,0.1) inset',
  py: 1.5,
  px: 3,
};

export default function Navigator(props: DrawerProps) {
  const { ...other } = props;
  const navigate = useNavigate();
  const { pathname, search  } = useLocation();
  


  const menus = [
    {title: "News Trends", path: NEWS_TRENDS_PATH, icon: <ShowChartIcon />},
    {title: "Sentiment Trends", path: SENTIMENT_TRENDS_PATH, icon: <FavoriteIcon />},
  ];
  // const location = useLocation();

  // console.log("pathname", pathname);
  // console.log("location", location);
  
  return (
    <Drawer variant="permanent" {...other}>
      <List disablePadding>
        <ListItem sx={{ ...item, ...itemCategory, fontSize: 22, color: '#fff' }}>
          News Analytics
        </ListItem>
        {
          menus.map(({title, path, icon}) => ( // 뒤에 오는게 소괄호: 컴포넌트 하나일 때 / 중괄호: 코드 라인이 여러줄일 때
            // loop를 돌 때는 list item이 서로 다르다는 것을 인지시켜야 하기 대문에 key를 줘야 함. 안그러면 에러남
            <ListItem key={path} sx={{ p: 0 }}> 
            <ListItemButton
              sx={item}
              selected={pathname === path} // 선택하면 메뉴 색상 자동 변경 true= 선택되었을 때, false= 선택되지 않았을 때. 
              onClick={() => {
                navigate(path + search); // 메뉴가 바뀌어도 검색창에 입력한 내용은 유지되어야 함.
              }}
            >
              <ListItemIcon>
                {icon}
              </ListItemIcon>
              <ListItemText>{title}</ListItemText>
            </ListItemButton>
          </ListItem>
          )) 
        }
      </List>
    </Drawer>
  );
}
