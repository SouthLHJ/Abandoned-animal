import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode> 이 모드일때는 2번 렌더링?을 해서 console.log 하면 2번찍힌다
  <React.StrictMode>
    <App />
  </React.StrictMode>
);