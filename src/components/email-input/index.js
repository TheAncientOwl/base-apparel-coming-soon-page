import { Container, Input, SubmitButton, InvalidEmailMessage } from './EmailInputElements';
import ArrowSrc from '../../images/icon-arrow.svg';
import { useState } from 'react';
import PropTypes from 'prop-types';

export default function EmailInput({ onSubmit }) {
  const [valid, setValid] = useState(true);
  const [email, setEmail] = useState('');

  const handleEmailChange = e => {
    setEmail(e.target.value);
  };

  const handleSubmitClick = () => {
    const regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const validEmail = regex.test(email);

    onSubmit(email, validEmail);
    setValid(validEmail);
  };

  return (
    <>
      <Container>
        <Input
          valid={valid}
          type='email'
          placeholder='Email Adress'
          value={email}
          onChange={handleEmailChange}
          required
        />
        <SubmitButton onClick={handleSubmitClick}>
          <img src={ArrowSrc} />
        </SubmitButton>
      </Container>
      <InvalidEmailMessage valid={valid}>Please provide a valid email</InvalidEmailMessage>
    </>
  );
}

EmailInput.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
