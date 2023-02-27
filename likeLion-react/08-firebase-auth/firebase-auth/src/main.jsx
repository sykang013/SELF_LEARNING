// import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@/styles/global.scss';
import APP from '@/app/App';
import {app} from './firebase.initializeApp'


createRoot(document.getElementById('root')).render(
  <>
    <App />
  </>
);
