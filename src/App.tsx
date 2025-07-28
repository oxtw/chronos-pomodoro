import { Heading } from './components/Heading';

import './styles/theme.css';
import './styles/global.css';
import { TimerIcon } from 'lucide-react';

export default function App() {
  console.log('App component rendered');
  return (
    <>
      <Heading>
        Olá Mundo
        <button>
          <TimerIcon />
        </button>
      </Heading>

      <h1>Welcome to Chronos Pomodoro</h1>
      <p>Your productivity companion.</p>
    </>
  );
}
