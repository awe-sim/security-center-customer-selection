import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import ModalContainer from 'react-modal-promise';
import { RecoilRoot } from 'recoil';
// import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RecoilRoot>
      <App />
      <ModalContainer />
    </RecoilRoot>
  </React.StrictMode>,
);
