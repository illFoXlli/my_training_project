import { Container, Logo, NavStyled, HeaderStyled, LinkItemNav } from './index';
import { Link } from 'react-router-dom';

const navItems = [
  { href: '/', text: 'Home', icon: null },
  { href: 'movies', text: 'Movies', icon: null },
];

const AppBar = () => {
  return (
    <>
      <Container>
        <HeaderStyled>
          <NavStyled>
            {navItems.map(({ href, text }) => (
              <LinkItemNav to={href} key={href}>
                {text}
              </LinkItemNav>
            ))}
          </NavStyled>
          <Link to={'/'}>
            <Logo />
          </Link>
        </HeaderStyled>
      </Container>
    </>
  );
};

export default AppBar;
