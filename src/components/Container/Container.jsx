import React from 'react';

import * as S from './Container.styles';

const Container = ({ children }) => {
  return <S.container>{children}</S.container>;
};

export default Container;
