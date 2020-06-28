import React, { Component } from 'react';
//import {NQueenAlgorithm} from './NQueenAlgorithm';

import Header from '../../components/Header';

export default class NQueen extends Component {
  constructor(props) {
    super(props);
    this.state = { disabled: false };
  }
  render() {
    const { disabled } = this.state;
    return (
      <div className='jumbotron jumbotron-fluid bg-dark'>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-8'>
              <div className='row'>
                <div className='col-sm-12'>
                  {/* <center>
                    <h2>N-Queens</h2>
                  </center> */}
                  <Header title='N QUEEN' />
                </div>
              </div>
              <div className='Qbox Qboard mb-2' id='nQueensBoard'></div>
              <div className='row'>
                <div className='input-group mt-2 container col-sm-5'>
                  <div class='ui labeled input'>
                    <div class='ui label'>Board Size</div>
                    <input
                      type='number'
                      id='boardInput'
                      className='mr-3'
                      placeholder='Board Size'
                      defaultValue='8'
                      readOnly={true}
                    />
                  </div>

                  <div className='input-group-append'>
                    <button
                      className='ui pink button'
                      disabled={disabled}
                      onClick={() => this.NQueensProblem()}
                    >
                      Visualise
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div id='NQueenResults' className='col-sm-4 mt-3'></div>
          </div>
        </div>
      </div>
    );
  }
}
