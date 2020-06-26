import React from 'react';
import { Tab, Container, Header } from 'semantic-ui-react';
import NQueen from './algorithms/NQueen.js';
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
];

const MainRouter = () => (
  <fragment>
    <div className='root'>
      <Container>
        <center>
          <div>
            <Header as='h1'>Algoflow</Header>
          </div>
        </center>
        <br />
        <div>
          <Tab
            menu={{ borderless: true, attached: false, tabular: false }}
            panes={panes}
          />
        </div>
      </Container>
    </div>
  </fragment>
);

export default MainRouter;
