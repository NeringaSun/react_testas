import React from "react";

import * as S from "./Header.styles";
import logo from "../../assets/icon.png";

const Header = ({ children }) => {
  return (
    <S.div>
      <S.img src={logo} alt="logo" />
      <div>{children}</div>
    </S.div>
  );
};

export default Header;
