import React, { Component } from 'react';
import './Arrow.css';

export const Arrow = (props) => {
  const { direction } = props;
  direction += 's';
  console.log(direction);
  const arrowRect = <div className={direction}></div>;
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
