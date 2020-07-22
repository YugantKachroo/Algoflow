import React from 'react';
import { NavLink } from 'react-router-dom';

const Bar = () => (
  <div className='bg-primary py-2'>
    <NavLink to='/'>
      <span className='text-light ml-3'>
        <i className='fas fa-arrow-left'></i> Back
      </span>
    </NavLink>
  </div>
);

export default Bar;
