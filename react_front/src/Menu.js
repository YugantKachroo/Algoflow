import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const isActive = (history, path) => {
  if (history.location.pathname === path)
    return { color: 'black', backgroundColor: 'white' };
  else return { color: 'black' };
};

const Menu = ({ history }) => (
  <div>
    <ul className='nav nav-tabs bg-info'>
      <li className='nav-item'>
        <Link className='nav-link' style={isActive(history, '/')} to='/'>
          Backtracking
        </Link>
      </li>
      <li className='nav-item'>
        <Link
          className='nav-link'
          style={isActive(history, '/Graph')}
          to='/Graph'
        >
          Graph
        </Link>
      </li>
      <li className='nav-item'>
        <Link
          className='nav-link'
          style={isActive(history, '/Searching')}
          to='/Searching'
        >
          Searching
        </Link>
      </li>
      <li className='nav-item'>
        <Link
          className='nav-link'
          style={isActive(history, '/Sorting')}
          to='/Sorting'
        >
          Sorting
        </Link>
      </li>
    </ul>
  </div>
);

export default withRouter(Menu);
