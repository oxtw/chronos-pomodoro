import './styles/theme.css';
import './styles/global.css';

import { Heading } from './components/Heading';
import { Container } from './components/Container';

export default function App() {
  console.log('App component rendered');
  return (
    <>
      <Container>
       <Heading>LOGO</Heading>
      </Container>

      <Container>
       <Heading>MENU</Heading>
      </Container>

    </>
  );
}
