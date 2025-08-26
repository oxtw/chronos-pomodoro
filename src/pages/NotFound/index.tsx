import { Container } from '../../components/Container';
import { MainTemplate } from '../../templates/MainTemplate';

export default function NotFound() {
  return (
    <MainTemplate>
      <Container>
        <h1>Pagina não encontrada</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, dicta,
          numquam expedita voluptas magni quod vel eius dolores harum neque ab
          obcaecati culpa alias provident saepe ipsam id dignissimos quia?
        </p>
      </Container>
    </MainTemplate>
  );
}
