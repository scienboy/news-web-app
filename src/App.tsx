import './App.css';

import { Route, Routes } from 'react-router-dom';

import Paperbase from "./components/Paperbase";
import NotFound from './components/Notfound';

function App() {
  return (
    <Routes>
      <Route element={<Paperbase />} path="/" />
      <Route element={<NotFound />} path="*" />
    </Routes>
  );
}

export default App;
