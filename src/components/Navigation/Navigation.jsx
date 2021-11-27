import React from "react";
import { Link } from "react-router-dom";

import * as S from "./Navigation.styles";

const Navigation = ({ links }) => {
  return (
    <div>
      <S.ul>
        {links.map((link) => (
          <S.li>
            <Link
              to={link.url}
              key={link.url}
              style={{ textDecoration: "none", color: "black" }}
            >
              {link.name}
            </Link>
          </S.li>
        ))}
      </S.ul>
    </div>
  );
};

export default Navigation;
