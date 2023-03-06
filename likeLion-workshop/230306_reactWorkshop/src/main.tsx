import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App'
import './index.css'

//컨테이너 에러
const container = document.getElementById('root');

//root가 div 라는것을 확신할 수 있기 때문에 
createRoot(container as HTMLDivElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);

