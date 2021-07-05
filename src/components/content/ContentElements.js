import styled, { css } from 'styled-components';
import Breakpoints from '../../Breakpoints';
import Colors from '../../Colors';

export const Container = styled.div`
  width: 100%;
  position: relative;
  padding: 3em 8em;

  @media (max-width: ${Breakpoints.desktop1}) {
    padding: 3em 5em;
  }

  @media (max-width: ${Breakpoints.mobile}) {
    padding: 4em 0;
    text-align: center;
    font-size: 0.9em;
  }
`;

export const BackgroundImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
`;

export const Logo = styled.img`
  margin-bottom: 5em;
  transform: scale(0.9);

  @media (max-width: ${Breakpoints.mobile}) {
    display: none;
  }
`;

export const Title = styled.div(
  ({ primary }) => css`
    font-size: 2.9em;
    text-transform: uppercase;
    letter-spacing: 0.45em;

    color: ${primary ? Colors.desaturatedRed : Colors.darkGrayRed};
    font-weight: ${primary ? '' : 'bold'};

    @media (max-width: ${Breakpoints.mobile}) {
      letter-spacing: 0.3em;
    }
  `
);

export const Description = styled.div`
  color: ${Colors.desaturatedRed};
  margin-top: 1.5em;
  max-width: 46ch;
  font-family: cursive;
  font-size: 0.9em;

  @media (max-width: ${Breakpoints.mobile}) {
    padding: 0 1em;
    font-size: 1em;
    margin: 1.5em auto 0 auto;
  }
`;
