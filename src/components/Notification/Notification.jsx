import React from 'react';
import * as S from './Notification.styles';

const Notification = ({ color, children }) => {
  let borderColor;
  switch (color) {
    case 'success':
      borderColor = 'green';
      break;
    case 'error':
      borderColor = 'red';
      break;
    default:
      borderColor = '#222';
  }

  return (
    <S.div className='notification' style={{ borderColor }}>
      {children}
    </S.div>
  );
};

export default Notification;
