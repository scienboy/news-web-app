import './App.css';

import { Navigate, Route, Routes } from 'react-router-dom';

import Paperbase from "./components/Paperbase"; // 이상한 url 입력 시 Not found 페이지로 이동
import NotFound from './components/Notfound';

export const NEWS_TRENDS_PATH = "/news-trends";
export const SENTIMENT_TRENDS_PATH = "/sentiment-trends";

function App() {
  return (
    <Routes>
      <Route element={<Navigate to={NEWS_TRENDS_PATH} />} path="/" /> // 디폴트 페이지 redirection
      <Route element={<Paperbase />} path={NEWS_TRENDS_PATH} />
      <Route element={<Paperbase />} path={SENTIMENT_TRENDS_PATH} />
      <Route element={<NotFound />} path="*" />
    </Routes>
  );
}

export default App;
