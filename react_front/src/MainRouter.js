import React from 'react';
import { Tab } from 'semantic-ui-react';
import Graph from './algorithms/Graph/Graph.js';
import NQueen from './algorithms/Backtracking/NQueen.js';
import Sorting from './algorithms/Sorting/Sorting.js';
import Searching from './algorithms/Searching/Searching.js';
import './css/MainRouter.css';

const panes = [
  {
    menuItem: 'Backtracking',
    render: () => (
      <Tab.Pane attached={false}>
        <NQueen />
      </Tab.Pane>
    ),
  },
  {
    menuItem: 'Graph',
    render: () => (
      <Tab.Pane attached={false}>
        <Graph />
      </Tab.Pane>
    ),
  },
  {
    menuItem: 'Searching',
    render: () => (
      <Tab.Pane attached={false}>
        <Searching />
      </Tab.Pane>
    ),
  },
  {
    menuItem: 'Sorting',
    render: () => (
      <Tab.Pane attached={false}>
        <Sorting />
      </Tab.Pane>
    ),
  },
];

const MainRouter = () => (
  <fragment>
    <div>
      <Tab
        menu={{ borderless: true, attached: false, tabular: false }}
        panes={panes}
      />
    </div>
  </fragment>
);

export default MainRouter;
