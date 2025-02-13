import { createRoot } from 'react-dom/client'
import './input.css'
import { BrowserRouter } from 'react-router'
import RouteList from './routes.tsx';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
      <RouteList />
  </BrowserRouter>
);
