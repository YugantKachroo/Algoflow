import React from 'react';
import { Tab } from 'semantic-ui-react';
import NQueen from './algorithms/NQueen.js';
import Sorting from './algorithms/Sorting/Sorting.js';
import Searching from './algorithms/Searching/Searching.js';
import './css/MainRouter.css';

const panes = [
  {
    menuItem: 'N Queen',
    render: () => (
      <Tab.Pane attached={false}>
        <NQueen />
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
