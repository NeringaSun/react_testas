import React from "react";

import * as S from "./Container.styles";

const Container = ({ children }) => {
  return <S.div>{children}</S.div>;
};

export default Container;
