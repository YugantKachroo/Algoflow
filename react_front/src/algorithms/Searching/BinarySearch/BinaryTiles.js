import React from 'react';

const BinaryTiles = ({ index, value }) => (
  <div className='binary-array-bar'>
    {`${value}`}
    <br />
    <span>{`${index}`}</span>
  </div>
);

export default BinaryTiles;
