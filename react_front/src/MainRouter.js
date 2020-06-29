import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Graph from './algorithms/Graph/Graph.js';
import Backtracking from './algorithms/Backtracking/Backtracking.js';
import Sorting from './algorithms/Sorting/Sorting.js';
import Searching from './algorithms/Searching/Searching.js';
import Menu from './Menu.js';
import './css/MainRouter.css';

// const panes = [
//   {
//     menuItem: 'Backtracking',
//     render: () => (
//       <Tab.Pane attached={false}>
//         <Backtracking />
//       </Tab.Pane>
//     ),
//   },
//   {
//     menuItem: 'Graph',
//     render: () => (
//       <Tab.Pane attached={false}>
//         <Graph />
//       </Tab.Pane>
//     ),
//   },
//   {
//     menuItem: 'Searching',
//     render: () => (
//       <Tab.Pane attached={false}>
//         <Searching />
//       </Tab.Pane>
//     ),
//   },
//   {
//     menuItem: 'Sorting',
//     render: () => (
//       <Tab.Pane attached={false}>
//         <Sorting />
//       </Tab.Pane>
//     ),
//   },
// ];

const MainRouter = () => (
  <fragment>
    <Menu />
    <Switch>
      <Route exact path='/' component={Backtracking} />
      <Route exact path='/Graph' component={Graph} />
      <Route exact path='/Searching' component={Searching} />
      <Route exact path='/Sorting' component={Sorting} />
    </Switch>
  </fragment>
);

export default MainRouter;
