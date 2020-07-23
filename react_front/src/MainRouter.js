import React from 'react';
import { Route } from 'react-router-dom';
import Graph from './algorithms/Graph/Graph.js';
import Backtracking from './algorithms/Backtracking/Backtracking.js';
import Sorting from './algorithms/Sorting/Sorting.js';
import Searching from './algorithms/Searching/Searching.js';
import DP from './algorithms/DynamicProgramming/Dp.js';
import LinkedList from './algorithms/LinkedList/LinkedList.js';
import Menu from './Menu.js';
import './css/MainRouter.css';

const MainRouter = () => (
  <>
    <Route exact path='/' component={Menu} />
    <Route path='/graph' component={Graph} />
    <Route path='/backtracking' component={Backtracking} />
    <Route path='/sorting' component={Sorting} />
    <Route path='/searching' component={Searching} />
    <Route path='/dp' component={DP} />
    <Route path='/linkedlist' component={LinkedList} />
  </>
);

export default MainRouter;
