import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// import App from './accordion/App';
// import App from './TipCalculator/App';
import App from './ListOfFriends/App';
import './style.css';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
