import styled from 'styled-components';
import Breakpoints from '../../Breakpoints';
import Colors from '../../Colors';

export const Container = styled.div`
  display: flex;
  margin-top: 3em;
  max-width: 50ch;

  @media (max-width: ${Breakpoints.mobile}) {
    width: 'calc(100% - 2em)';
    margin: 2em auto 0 auto;
    padding-left: 2em;
  }
`;

export const Input = styled.input`
  width: 100%;
  font-family: cursive;
  font-weight: bold;
  border: 0.1em solid ${({ valid }) => (valid ? Colors.desaturatedRed : Colors.softRed)};
  border-width: ${({ valid }) => (valid ? '0.1em' : '0.2em')};
  padding: 0.9em 2em;
  border-radius: 1.5em;
  outline: none;
  color: ${Colors.darkGrayRed};

  &::placeholder {
    color: ${Colors.desaturatedRed};
    opacity: 0.7;
  }
`;

export const SubmitButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  padding: 0.5em 1.5em;
  width: 3em;
  border-radius: 1.5em;

  box-shadow: 0.25em 0.25em 1em ${Colors.desaturatedRed};

  position: relative;
  transform: translateX(-50%);

  background: ${Colors.desaturatedRed};
  background: linear-gradient(135deg, hsl(0, 80%, 86%) 35%, hsl(0, 74%, 74%) 100%);

  transition: 100ms linear;

  &:hover {
    background: linear-gradient(135deg, hsl(0, 80%, 86%) 15%, hsl(0, 74%, 74%) 100%);
    box-shadow: 0.25em 0.25em 2em ${Colors.desaturatedRed};
    transform: translateX(-50%) scale(1.1);
    transition: 100ms linear;
  }

  @media (max-width: ${Breakpoints.mobile}) {
    width: 1.9em;
  }
`;

export const InvalidEmailMessage = styled.div`
  visibility: ${({ valid }) => (valid ? 'hidden' : '')};
  font-family: cursive;
  font-size: 0.9em;
  padding: 0.7em 2em;
  color: ${Colors.softRed};
`;
