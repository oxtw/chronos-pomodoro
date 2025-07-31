import './styles/theme.css';
import './styles/global.css';
import { Container } from './components/Container';
import { Heading } from './components/Heading';

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
