import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <h1>Hello, World!</h1>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias
      tempore saepe illo distinctio dolores soluta iusto, minima amet ad
      temporibus ullam, fugit, aliquam doloribus maxime suscipit ipsam
      voluptatibus rerum nihil!
    </p>
  </StrictMode>,
);
