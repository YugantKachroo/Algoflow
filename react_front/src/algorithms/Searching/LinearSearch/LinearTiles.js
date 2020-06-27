import React from 'react';

const LinearTiles = ({ index, value }) => (
  <div className='linear-array-bar'>
    {`${value}`}
    <br />
    <span>{`${index}`}</span>
  </div>
);

export default LinearTiles;
