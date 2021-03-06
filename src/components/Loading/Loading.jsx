import React from 'react';
import './Loading.css';

const Loading = () => {
  return (
    <div className='loading'>
      <div className='lds-circle'>
        <div></div>
      </div>
    </div>
  );
};

export default Loading;
