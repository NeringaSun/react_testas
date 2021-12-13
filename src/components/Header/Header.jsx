import React from 'react';

import * as S from './Header.styles';
import logo from '../../assets/icon.png';
import { Container } from '..';

const Header = ({ children }) => {
  return (
    <S.header>
      <Container>
        <S.headerdiv>
          <S.img src={logo} alt='logo' />
          <div>{children}</div>
        </S.headerdiv>
      </Container>
    </S.header>
  );
};

export default Header;
