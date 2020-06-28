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
                <div className='input-group mt-1 container col-sm-6'>
                  <div className='input-group-prepend'>
                    <span className='input-group-text'>Board Size</span>
                  </div>
                  <input
                    type='number'
                    id='boardInput'
                    className='form-control'
                    placeholder='Board Size'
                    defaultValue='8'
                    readOnly={true}
                  />
                  <div className='input-group-append'>
                    <button
                      className='btn btn-secondary'
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
