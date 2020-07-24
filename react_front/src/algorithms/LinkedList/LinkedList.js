import React, { Component } from 'react';
import Bar from '../../components/Bar';
import './LinkedList.css';
import Pointer from './pointer.png';
import './File.css';

let nodeAnimationTimeout: 1000;
let pointerAnimationTimeout: 800;
let deleteTimeout: 1000;
let errorCircle = '<i class="fas fa-exclamation-circle"></i> ';

export default class LinkedList extends Component {
  constructor(props) {
    super(props);
    this.state = { addValue: '' };
    this.addHandleChange = this.addHandleChange.bind(this);
    this.ClickAdd = this.ClickAdd.bind(this);
  }

  componentDidMount() {
    this.add(0, 2);
  }

  async ClickAdd(event) {
    event.preventDefault();
    let nodes = [];
    nodes = document.getElementsByClassName('node1');
    await console.log(nodes.length);
    if (this.state.addValue === '') {
      alert('Enter a number');
      return;
    }
    this.add(nodes.length, this.state.addValue);
    //console.log(this.state.addValue);
  }

  checkInputErrors(input, type, endsAtLastNode = false) {
    let inputError = false;
    let nodes = document.getElementsByClassName('node1');
    let end = endsAtLastNode ? nodes.length - 1 : nodes.length;
    let error = document.getElementById('error');

    if (isNaN(input)) {
      error.innerHTML = errorCircle + type + ' must be a number';
      inputError = true;
    } else if (type === 'Index' && (input > end || input < 0)) {
      error.innerHTML = errorCircle + 'Index Out Of Bounds';
      inputError = true;
    }

    if (inputError) error.firstChild.style.animation = 'highlightNode .8s ease';
    else error.innerHTML = null;

    return inputError;
  }

  addHandleChange(event) {
    const temp = event.target.value;
    this.setState({ addValue: temp });
    // console.log(this.state.addValue);
  }

  async add(i, data) {
    if (
      this.checkInputErrors(i, 'Index') ||
      this.checkInputErrors(data, 'Data')
    )
      return;

    let node = document.createElement('div');
    node.classList.add('node1');
    let number = document.createElement('p');
    number.classList.add('number1');
    let text = document.createTextNode(data);
    //console.log(data);
    number.appendChild(text);
    node.appendChild(number);

    let pointer = document.createElement('div');
    pointer.classList.add('pointer');
    pointer.style.opacity = '0';

    let img = document.createElement('img');
    img.src = Pointer;

    pointer.appendChild(img);
    let nodes = document.getElementsByClassName('node');
    let list = document.getElementById('list');

    if (i === nodes.length) {
      await this.animateNodes(0, i - 1);
      list.appendChild(node);
      list.appendChild(pointer);
    } else {
      await this.animateNodes(0, i - 1);
      await this.animateNodesBeforeInsert(i, nodes.length);
      list.insertBefore(pointer, nodes[i]);
      list.insertBefore(node, pointer);
    }

    node.classList.add('grow-animation');

    setTimeout(() => {
      pointer.style.opacity = 1;
      pointer.classList.add('slide-animation');
    }, nodeAnimationTimeout);
  }

  async animateNodes(start, end) {
    for (let i = start; i <= end; i++) {
      await this.animateNode(i);
      await this.animatePointer(i);
    }
  }

  animateNode(i) {
    return new Promise((resolve) => {
      let nodes = document.getElementsByClassName('node1');
      nodes[i].classList.add('highlightNode-animation');
      setTimeout(() => {
        nodes[i].classList.remove('highlightNode-animations');
        // nodes[i].style.animation = null;
        resolve();
      }, nodeAnimationTimeout);
    });
  }

  animatePointer(i) {
    return new Promise((resolve) => {
      let pointers = document.getElementsByClassName('pointer');
      pointers[i].classList.add('highlightPointer-animation');
      // pointers[i].style.animation =
      //   'highlightPointer ' + pointerAnimationTimeout / 1000 + 's ' + 'ease';
      setTimeout(() => {
        pointers[i].classList.remove('highlightPointer-animation');
        // pointers[i].style.animation = null;
        resolve();
      }, pointerAnimationTimeout);
    });
  }

  animateNodesBeforeInsert(from, to) {
    return new Promise((resolve) => {
      let pointers = document.getElementsByClassName('pointer');
      let nodes = document.getElementsByClassName('node1');
      for (let i = from; i < to; i++) {
        console.log('length3', nodes.length);
        console.log(1);

        nodes[i].style.animation =
          'moveRightNode ' + pointerAnimationTimeout / 1000 + 's ' + 'ease';

        pointers[i].style.animation =
          'moveRightNode ' + pointerAnimationTimeout / 1000 + 's ' + 'ease';

        setTimeout(() => {
          nodes[i].style.animation = null;
          pointers[i].style.animation = null;
        }, pointerAnimationTimeout);
      }

      setTimeout(() => resolve(), pointerAnimationTimeout);
    });
  }

  render() {
    return (
      <div>
        <Bar />
        <div className='list' id='list'></div>
        <div className='errors'>
          <div className='error-message'>
            <p id='error'></p>
          </div>
        </div>
        <div className='operations'>
          <div className='wrapper'>
            <div>
              <button className='button' id='set-btn'>
                Set
              </button>
              <input type='number' placeholder='Index' />
              <input type='number' placeholder='Data' />
            </div>
            <div>
              <button className='button' id='insert-btn'>
                Insert
              </button>
              <input type='number' placeholder='Index' />
              <input type='number' placeholder='Data' />
            </div>
            <div>
              <button onClick={this.ClickAdd} className='button' id='add-btn'>
                Add
              </button>
              <input
                type='number'
                value={this.state.addValue}
                onChange={this.addHandleChange}
                placeholder='Data'
              />
            </div>
            <div>
              <div className='remove'>
                <button className='button' id='remove-btn'>
                  Remove
                </button>
                <button className='button' id='remove-settings'>
                  <i className='fas fa-cog'></i>
                </button>
              </div>
              <button className='remove-option' id='remove-index-btn'>
                Index
              </button>
              <button className='remove-option' id='remove-data-btn'>
                Data
              </button>
              <input type='number' placeholder='Index' />
              <input type='number' placeholder='Data' />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
