import React, { Component, useState, useEffect } from 'react';
import './LinearTiles.css';
import LinearTiles from './LinearTiles';
import './LinearSearch.css';
import { Button, Input, Divider } from 'semantic-ui-react';
import RandomInt from '../../../components/RandomInt';
import Header from '../../../components/Header';

const ARRAY_BARS = 20;
const D_COLOR = '#63eaf1';
const FOUND_COLOR = '#6eb428';
const NOT_FOUND_COLOR = '#f16363';
const ANIMATION_SPEED_SECONDS = 0.4;

class LinearSearch extends Component {
  constructor(props) {
    super(props);
    this.setState = {
      array: [],
      found: false,
      message: '',
      disabled: false,
      findex: 0,
      target: null,
    };
  }

  //   componentDidMount() {
  //     this.Arrayreset();
  //   }

  //   Arrayreset = () => {
  //     const array = [];
  //     const found = false;
  //     document.getElementById('target').value = '';
  //     const disabled = false;
  //     const prevArray = document.getElementsByClassName('linear-array-bar');
  //   };

  render() {
    //const { message, disabled, array, found } = this.state;
    return <div className='jumbotron jumbotron-fluid bg-light'>hghjghj</div>;
  }
}

export default LinearSearch;
