import React, { Component } from 'react';
import './Arrow.css';

export const Arrow = (props) => {
  const { direction } = props;
  console.log(direction);
  let dir = '';
  dir += direction + 's';
  console.log(dir);
  const arrowRect = <div className={dir}></div>;
  return (
    <div className='arrowContainer'>
      {direction === 'right' ? (
        <>
          <hr />
          {arrowRect}
        </>
      ) : (
        <>
          {arrowRect}
          <hr />
        </>
      )}
    </div>
  );
};
