import React from 'react';
import { Link } from 'react-router-dom';

import * as S from './Navigation.styles';

const Navigation = ({ links }) => {
  return (
    <div>
      <S.ul>
        {links.map((link) => (
          <S.li key={link.url}>
            <Link
              to={link.url}
              style={{
                textDecoration: 'none',
                color: 'black',
                cursor: 'pointer',
              }}
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
