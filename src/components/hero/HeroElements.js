import styled from 'styled-components';
import Breakpoints from '../../Breakpoints';
import MobileHerSrc from '../../images/hero-mobile.jpg';

export const Image = styled.img`
  width: 40%;
  height: 100vh;
  object-fit: cover;
  object-position: top left;

  @media (min-width: 1024px) {
    width: 45%;
  }

  @media (max-width: ${Breakpoints.mobile}) {
    width: 100%;
    height: 30em;
    content: ${MobileHerSrc};
    margin-top: 3em;
    object-fit: cover;
    object-position: top;
    height: 20em;
  }

  @media (max-width: ${Breakpoints.mobile2}) {
    height: 20em;
  }
`;
