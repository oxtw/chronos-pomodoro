import { Heading } from './components/Heading';

import './styles/theme.css';
import './styles/global.css';

export default function App() {
  console.log('App component rendered');
  return (
    <>
      <Heading attr={123} attr2='string'>Olá Mundo</Heading>
      <Heading>Olá Mundo2</Heading>

      <h1>Welcome to Chronos Pomodoro</h1>
      <p>Your productivity companion.</p>
    </>
  );
}
