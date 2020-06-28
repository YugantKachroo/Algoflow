import React from 'react';

const SearchingTiles = ({ index, value, type }) =>
  type === 'BinarySearch' ? (
    <div className='binary-array-bar'>
      {`${value}`}
      <br />
      <span>{`${index}`}</span>
    </div>
  ) : (
    <div className='linear-array-bar'>
      {`${value}`}
      <br />
      <span>{`${index}`}</span>
    </div>
  );

export default SearchingTiles;
