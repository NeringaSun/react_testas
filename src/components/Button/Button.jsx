import React from "react";

import * as S from "./Button.styles";

const Button = ({ type, children }) => {
  return <S.button type={type || "button"}>{children}</S.button>;
};

export default Button;
