import React, { Component } from 'react';
import Bar from '../../components/Bar';
import './LinkedList.css';
import Pointer from './pointer.png';
import RedPointer from './pointer1.png';
import GreenPointer from './pointer2.png';
import './File.css';

let nodeAnimationTimeout: 1000;
let errorCircle = '<i class="fas fa-exclamation-circle"></i> ';
let nodes = document.getElementsByClassName('node1');
let pointers = document.getElementsByClassName('pointer1');

export default class LinkedList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addValue: '',
      setIndex: '',
      setValue: '',
      insertIndex: '',
      insertValue: '',
      removeIndex: '',
      disabled: false,
    };
    this.addHandleChange = this.addHandleChange.bind(this);
    this.ClickAdd = this.ClickAdd.bind(this);
    this.setValueHandleChange = this.setValueHandleChange.bind(this);
    this.setIndexHandleChange = this.setIndexHandleChange.bind(this);
    this.insertValueHandleChange = this.insertValueHandleChange.bind(this);
    this.insertIndexHandleChange = this.insertIndexHandleChange.bind(this);
    this.removeIndexHandleChange = this.removeIndexHandleChange.bind(this);
    this.ClickSet = this.ClickSet.bind(this);
    this.ClickInsert = this.ClickInsert.bind(this);
    this.ClickRemove = this.ClickRemove.bind(this);
  }

  componentDidMount() {
    this.addfunction(0, 2);
  }

  async ClickAdd(event) {
    event.preventDefault();
    if (this.state.addValue === '') {
      alert('Enter a number');
      return;
    }
    this.addfunction(nodes.length, this.state.addValue);
  }

  checkInputErrors(input, type, endsAtLastNode = false) {
    let inputError = false;
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
    if (temp > 100) {
      alert('Enter value less than 100');
      return;
    }
    this.setState({ addValue: temp });
  }

  async addfunction(i, data) {
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

    number.appendChild(text);
    node.appendChild(number);

    let pointer = document.createElement('div');
    pointer.classList.add('pointer1');
    pointer.style.opacity = '0';

    let img = document.createElement('img');
    img.src = Pointer;

    pointer.appendChild(img);
    let list = document.getElementById('list');
    if (i === nodes.length) {
      if (i === 0) {
        list.appendChild(node);
      } else {
        list.appendChild(pointer);
        list.appendChild(node);
      }
    } else {
      await this.setState({ disabled: true });

      if (i == 0) {
        await this.setState({ disabled: true });
        setTimeout(() => {
          list.insertBefore(pointer, nodes[i]);
          list.insertBefore(node, pointer);
          nodes[i].classList.add('animateClass');
        }, i * 1000);
        setTimeout(() => {
          let img2 = document.createElement('img');
          img2.src = GreenPointer;
          pointers[i].removeChild(pointers[i].firstChild);
          pointers[i].appendChild(img2);
        }, i * 1000);
        let count = 0;
        count = i;
        setTimeout(() => {
          for (let i = 0; i <= count; i++) {
            nodes[i].classList.remove('animateClass1');
            nodes[i].classList.remove('animateClass');
          }
          this.setState({ disabled: false });
        }, (count + 1) * 2000);

        setTimeout(() => {
          for (let i = 0; i <= count; i++) {
            let img1 = document.createElement('img');
            img1.src = Pointer;
            pointers[i].removeChild(pointers[i].firstChild);
            pointers[i].appendChild(img1);
          }
        }, (count + 1) * 2000);
      } else {
        this.animateNodes(0, i - 1);
        setTimeout(() => {
          list.insertBefore(pointer, nodes[i]);
          list.insertBefore(node, pointer);
          nodes[i].classList.add('animateClass');
        }, i * 1000);
        setTimeout(() => {
          let img2 = document.createElement('img');
          img2.src = GreenPointer;
          pointers[i].removeChild(pointers[i].firstChild);
          pointers[i].appendChild(img2);
        }, i * 1000);
        let count = 0;
        count = i;

        setTimeout(() => {
          for (let i = 0; i <= count; i++) {
            nodes[i].classList.remove('animateClass1');
            nodes[i].classList.remove('animateClass');
          }
          this.setState({ disabled: false });
        }, count * 2000);

        setTimeout(() => {
          for (let i = 0; i <= count; i++) {
            let img1 = document.createElement('img');
            img1.src = Pointer;
            pointers[i].removeChild(pointers[i].firstChild);
            pointers[i].appendChild(img1);
          }
        }, count * 2000);
      }
    }

    await node.classList.add('grow-animation');

    setTimeout(() => {
      pointer.style.opacity = 1;
      pointer.classList.add('slide-animation');
    }, nodeAnimationTimeout);
  }

  async animateNodes(start, end) {
    for (let i = start; i <= end; i++) {
      setTimeout(() => {
        nodes[i].classList.add('animateClass1');
        let img = document.createElement('img');
        img.src = RedPointer;
        pointers[i].removeChild(pointers[i].firstChild);
        pointers[i].appendChild(img);
      }, i * 1000);
      this.animateNode(i);
      this.animatePointer(i);
    }
  }

  animateNode(i) {
    nodes[i].classList.add('highlightNode-animation');
    setTimeout(() => {
      nodes[i].classList.remove('highlightNode-animation');
    }, i * 1000);
  }

  animatePointer(i) {
    pointers[i].classList.add('highlightPointer-animation');
    setTimeout(() => {
      pointers[i].classList.remove('highlightPointer-animation');
    }, i * 1000);
  }

  setValueHandleChange(event) {
    const temp = event.target.value;
    if (temp > 100) {
      alert('Enter value less than 100');
      return;
    }
    this.setState({ setValue: temp });
  }

  setIndexHandleChange(event) {
    const temp = event.target.value;
    this.setState({ setIndex: temp });
  }

  async ClickSet(event) {
    event.preventDefault();
    if (this.state.setValue === '') {
      alert('Enter a number');
      return;
    }
    if (this.state.setIndex === '' || this.state.setIndex >= nodes.length) {
      alert('Enter index between 0 and number of nodes');
      return;
    }

    this.setfunction(this.state.setIndex, this.state.setValue);
  }

  async setfunction(ind, data) {
    await this.setState({ disabled: true });
    if (
      this.checkInputErrors(ind, 'Index', true) ||
      this.checkInputErrors(data, 'Data')
    ) {
      return;
    }

    if (ind == 0) {
      await this.setState({ disabled: true });
      setTimeout(() => {
        setTimeout(() => {
          nodes[ind].firstChild.classList.add('fadeNumberOut-animation');
        }, ind * 1000);
        nodes[ind].firstChild.innerHTML = data;
        nodes[ind].firstChild.classList.add('fadeNumberIn-animation');
        nodes[ind].classList.add('animateClass');
      }, ind * 1000);

      setTimeout(() => {
        nodes[ind].firstChild.classList.remove('fadeNumberOut-animation');
        nodes[ind].firstChild.classList.remove('fadeNumberIn-animation');
        nodes[ind].classList.remove('animateClass');

        this.setState({ disabled: false });
      }, (ind + 1) * 1000 * 2);
    } else {
      await this.animateNodes(0, ind - 1);
      setTimeout(() => {
        nodes[ind].firstChild.classList.add('fadeNumberOut-animation');
      }, ind * 1000);

      setTimeout(() => {
        nodes[ind].firstChild.innerHTML = data;
        nodes[ind].firstChild.classList.add('fadeNumberIn-animation');
        nodes[ind].classList.add('animateClass');
      }, ind * 1000);

      setTimeout(() => {
        nodes[ind].firstChild.classList.remove('fadeNumberOut-animation');
        nodes[ind].firstChild.classList.remove('fadeNumberIn-animation');
        nodes[ind].classList.remove('animateClass');
        for (let i = 0; i <= ind - 1; i++) {
          nodes[i].classList.remove('animateClass1');
        }
        this.setState({ disabled: false });
      }, ind * 1000 * 2);

      setTimeout(() => {
        for (let i = 0; i <= ind - 1; i++) {
          let img1 = document.createElement('img');
          img1.src = Pointer;
          pointers[i].removeChild(pointers[i].firstChild);
          pointers[i].appendChild(img1);
        }
      }, ind * 1000 * 2);
    }
  }

  insertValueHandleChange(event) {
    const temp = event.target.value;
    if (temp > 100) {
      alert('Enter value less than 100');
      return;
    }
    this.setState({ insertValue: temp });
  }

  insertIndexHandleChange(event) {
    const temp = event.target.value;
    this.setState({ insertIndex: temp });
  }

  async ClickInsert(event) {
    event.preventDefault();
    if (this.state.insertValue === '') {
      alert('Enter a number');
      return;
    }
    if (
      this.state.insertIndex === '' ||
      this.state.insertIndex >= nodes.length
    ) {
      alert('Enter index between 0 and number of nodes');
      return;
    }

    this.addfunction(this.state.insertIndex, this.state.insertValue);
  }

  removeIndexHandleChange(event) {
    const temp = event.target.value;
    this.setState({ removeIndex: temp });
  }

  async ClickRemove() {
    if (
      this.state.removeIndex === '' ||
      this.state.removeIndex >= nodes.length
    ) {
      alert('Enter index between 0 and number of nodes');
      return;
    }

    this.removefunction(this.state.removeIndex);
  }

  async removefunction(ind) {
    await this.setState({ disabled: true });
    if (
      this.handleEmptyListError() ||
      this.checkInputErrors(ind, 'Index', true)
    )
      return;

    await this.animateNodes(0, ind - 1);
    await this.deleteNode(ind);

    if (ind == 0) {
      setTimeout(() => {
        let img1 = document.createElement('img');
        img1.src = Pointer;
        if (ind >= nodes.length - 1) {
        } else {
          pointers[ind].removeChild(pointers[ind].firstChild);
          pointers[ind].appendChild(img1);
        }
        for (let i = 0; i < ind; i++) {
          nodes[i].classList.remove('animateClass1');
        }
        this.setState({ disabled: false });
      }, (ind + 1) * 1500);
    } else if (ind == nodes.length - 1) {
      setTimeout(() => {
        for (let jj = 0; jj < ind - 1; jj++) {
          let img1 = document.createElement('img');
          img1.src = Pointer;
          pointers[jj].removeChild(pointers[jj].firstChild);
          pointers[jj].appendChild(img1);
        }
        pointers[ind - 1].removeChild(pointers[ind - 1].firstChild);

        for (let i = 0; i < ind; i++) {
          nodes[i].classList.remove('animateClass1');
        }
        let list = document.getElementById('list');
        list.removeChild(nodes[ind]);
        list.removeChild(pointers[ind - 1]);
        this.setState({ disabled: false });
        //console.log(0);
      }, ind * 1500);
    } else {
      setTimeout(() => {
        for (let i = 0; i < ind; i++) {
          let img1 = document.createElement('img');
          img1.src = Pointer;
          if (i >= nodes.length - 1) {
          } else {
            pointers[i].removeChild(pointers[i].firstChild);
            pointers[i].appendChild(img1);
          }
          for (let i = 0; i < ind; i++) {
            nodes[i].classList.remove('animateClass1');
          }
        }

        this.setState({ disabled: false });
      }, ind * 1500);
    }
  }

  async deleteNode(ind) {
    const tempValue = nodes.length - 1;
    if (ind == tempValue && ind != 0) {
      nodes[ind].firstChild.classList.add('deleteNode-animation');
      await setTimeout(() => {
        nodes[ind].classList.add('animateClass');
      }, ind * 1000);
    } else if (ind == 0) {
      nodes[ind].firstChild.classList.add('deleteNode-animation');

      if (pointers.length >= 1) {
        pointers[ind].firstChild.classList.add('deletePointer-animation');
        await setTimeout(() => {
          let img2 = document.createElement('img');
          img2.src = GreenPointer;
          pointers[ind].removeChild(pointers[ind].firstChild);
          pointers[ind].appendChild(img2);
          nodes[ind].classList.add('animateClass');
        }, ind * 1000);

        setTimeout(() => {
          let img1 = document.createElement('img');
          img1.src = Pointer;
          if (ind >= nodes.length - 1) {
          } else {
            pointers[ind].removeChild(pointers[ind].firstChild);
            pointers[ind].appendChild(img1);
          }
          for (let i = 0; i < ind; i++) {
            nodes[i].classList.remove('animateClass1');
          }
          nodes[ind].classList.remove('animateClass');
          this.setState({ disabled: false });
        }, (ind + 1) * 1500);
        await setTimeout(() => {
          let list = document.getElementById('list');
          list.removeChild(nodes[ind]);
          list.removeChild(pointers[ind]);
        }, (ind + 1) * 1500);
      } else {
        nodes[ind].firstChild.classList.add('deleteNode-animation');
        await setTimeout(() => {
          nodes[ind].classList.add('animateClass');
        }, ind * 1000);
        await setTimeout(() => {
          let list = document.getElementById('list');
          list.removeChild(nodes[ind]);
        }, (ind + 1) * 1500);
      }
    } else {
      if (pointers.length >= 2) {
        nodes[ind].firstChild.classList.add('deleteNode-animation');
        pointers[ind].firstChild.classList.add('deletePointer-animation');
        await setTimeout(() => {
          let img2 = document.createElement('img');
          img2.src = GreenPointer;
          pointers[ind].removeChild(pointers[ind].firstChild);
          pointers[ind].appendChild(img2);
          nodes[ind].classList.add('animateClass');
        }, ind * 1000);
        await setTimeout(() => {
          let list = document.getElementById('list');
          list.removeChild(nodes[ind]);
          list.removeChild(pointers[ind]);
        }, ind * 1500);
      } else {
        nodes[ind].firstChild.classList.add('deleteNode-animation');
        await setTimeout(() => {
          nodes[ind].classList.add('animateClass');
          console.log(nodes[ind].classList);
        }, ind * 1000);
        await setTimeout(() => {
          let list = document.getElementById('list');
          list.removeChild(nodes[ind]);
          if (pointers.length >= 1) {
            if (ind !== 0) {
              pointers[ind - 1].firstChild.classList.add(
                'deletePointer-animation'
              );
              list.removeChild(pointers[ind - 1]);
            } else {
              pointers[ind].firstChild.classList.add('deletePointer-animation');
              list.removeChild(pointers[ind]);
            }
          }
        }, ind * 1500);
      }
    }
  }

  handleEmptyListError() {
    let error = document.getElementById('error');
    if (nodes.length === 0) {
      error.innerHTML = errorCircle + ' List is empty';
      error.firstChild.style.animation = 'highlightNode .8s ease';
      return true;
    }
    error.innerHTML = null;
    return false;
  }

  render() {
    const { disabled } = this.state;
    return (
      <div>
        <Bar />
        <br />
        <center>
          <h1>Linked List</h1>
        </center>
        <br />
        <div className='list' id='list'></div>
        <div className='errors'>
          <div className='error-message'>
            <p id='error'></p>
          </div>
        </div>
        <div className='operations'>
          <div className='wrapper'>
            <div>
              <input
                value={this.state.setIndex}
                onChange={this.setIndexHandleChange}
                type='number'
                placeholder='Index (0 based)'
              />
              <input
                value={this.state.setValue}
                onChange={this.setValueHandleChange}
                type='number'
                placeholder='Data'
              />
              <br />
              <button
                disabled={disabled}
                onClick={this.ClickSet}
                className='ui blue button'
                id='set-btn'
              >
                Update
              </button>
            </div>
            <div>
              <input
                value={this.state.insertIndex}
                onChange={this.insertIndexHandleChange}
                type='number'
                placeholder='Index (0 based)'
              />
              <input
                value={this.state.insertValue}
                onChange={this.insertValueHandleChange}
                type='number'
                placeholder='Data'
              />
              <br />
              <button
                disabled={disabled}
                onClick={this.ClickInsert}
                className='ui green button'
                id='insert-btn'
              >
                Insert
              </button>
            </div>
            <div>
              <br />
              <br />
              <input
                type='number'
                value={this.state.addValue}
                onChange={this.addHandleChange}
                placeholder='Data'
              />
              <br />
              <button
                disabled={disabled}
                onClick={this.ClickAdd}
                className='ui pink button'
                id='add-btn'
              >
                Add
              </button>
            </div>
            <div>
              <br />
              <br />
              <input
                value={this.state.removeIndex}
                onChange={this.removeIndexHandleChange}
                type='number'
                placeholder='Index (0 based)'
              />
              <br />
              <button
                disabled={disabled}
                onClick={this.ClickRemove}
                className='ui red button'
                id='remove-btn'
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
