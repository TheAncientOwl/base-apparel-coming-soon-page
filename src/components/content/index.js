import { Container, Logo, Title, Description, BackgroundImage } from './ContentElements';
import LogoSrc from '../../images/logo.svg';
import BackgroundSrc from '../../images/bg-pattern.svg';
import EmailInput from '../email-input';

export default function Content() {
  return (
    <Container>
      <BackgroundImage src={BackgroundSrc} alt='' />
      <Logo src={LogoSrc} alt='circle base apparel logo' />
      <Title primary={true}>we&apos;re</Title>
      <Title>coming</Title>
      <Title>soon</Title>
      <Description>
        Hello fellow shoppers! We&apos;re currently building our new fashion store. Add your email below to stay
        up-to-date with announcements and our launch deals.
      </Description>
      <EmailInput
        onSubmit={(email, valid) => {
          if (valid) alert(`email sent to ${email}`);
        }}
      />
    </Container>
  );
}
