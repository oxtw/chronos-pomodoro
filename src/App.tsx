import { Heading } from './components/Heading';

import './styles/theme.css';
import './styles/global.css';

export default function App() {
  console.log('App component rendered');
  return (
    <>
      <Heading />
      <h1>Welcome to Chronos Pomodoro</h1>
      <p>Your productivity companion.</p>
    </>
  );
}
