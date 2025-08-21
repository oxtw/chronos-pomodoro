import { Container } from './components/Container';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { CountDown } from './components/CountDown';
import { Cycles } from './components/Cycles';
import { DefaultInput } from './components/DefaultInput';
import { DefaultButton } from './components/DefaultButton';
import { PlayCircleIcon } from 'lucide-react';
import { Footer } from './components/Footer';
import { Heading } from './components/Heading';
import { useState } from 'react';

import './styles/theme.css';
import './styles/global.css';

export default function App() {

  //Sempre que eu usar useState, não vou usar atribuição '=' diretamente
  // const [numero, setNumero] = useState(()=> {
  //   console.log('useState foi executado');
  //   return 0;
  // });

  const [numero, setNumero] = useState(0);



  function handleClick() {
    // setNumero((prevState) => prevState + 1); // Atualiza o estado, incrementando o número
   setNumero(1); // Atualiza o estado, incrementando o número
  }

  
  return (
    <>
      <Heading>
        Número: <span id='numero'>{numero}</span>
      </Heading>
      <button onClick={handleClick}>Aumenta</button>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      <Container>
        <CountDown />
      </Container>

      <Container>
        <form className='form' action=''>
          <div className='formRow'>
            <DefaultInput
              labelText={numero.toString()}
              id='meuInput'
              type='text'
              placeholder='Digite Algo...'
            />
          </div>

          <div className='formRow'>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className='formRow'>
            <Cycles />
          </div>

          <div className='formRow'>
            <DefaultButton icon={<PlayCircleIcon />} />
          </div>
        </form>
      </Container>

      <Container>
        <Footer />
      </Container>
    </>
  );
}
