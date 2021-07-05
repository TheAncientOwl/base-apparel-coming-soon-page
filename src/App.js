import styled from 'styled-components';
import Breakpoints from './Breakpoints';
import Content from './components/content';
import Hero from './components/hero';
import LogoSrc from './images/logo.svg';

const Container = styled.div`
  display: flex;

  @media (max-width: ${Breakpoints.mobile}) {
    flex-direction: column-reverse;
    padding-top: 3em;
  }
`;

const MobileLogo = styled.img`
  margin-left: 2em;

  @media (min-width: ${Breakpoints.mobile}) {
    display: none;
  }
`;

export default function App() {
  return (
    <Container>
      <Content />
      <Hero />
      <div>
        <MobileLogo src={LogoSrc} alt='circle base apparel logo' />
      </div>
    </Container>
  );
}
