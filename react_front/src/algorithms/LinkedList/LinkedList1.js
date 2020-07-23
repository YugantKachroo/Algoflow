import React, { Component } from 'react';
import { Node } from './Utils/Node';
import { Arrow } from './Utils/Arrow';
import { LLNode } from './Utils/LLNode';
import { ReverseLL } from './Reverse/ReverseLL';
import './LinkedList.css';

export default class LinkedList1 extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     canReverse: false,
  //     start: null,
  //     inputData: '1,2,3,4,5',
  //     nodeValue: null,
  //     reverse: false,
  //     pointers: {},
  //     linkedList: [],
  //   };
  // }
  // componentDidMount() {
  //   //this.handleData();
  // }

  // async handleData() {
  //   const { inputData } = this.state;
  //   const result = inputData.split(',');
  //   //console.log(result);
  //   const nodeList = result.map((value) => {
  //     return new Node(value);
  //   });
  //   for (let i = 0; i < nodeList.length - 1; i++) {
  //     nodeList[i].next = nodeList[i + 1];
  //   }
  //   nodeList[nodeList.length - 1].next = null;
  //   const startVal = nodeList[0];
  //   //console.log(startVal);
  //   await this.setState({ start: startVal, inputData: '', canReverse: true });
  //   //this.parseLL();
  // }

  // async parseLL() {
  //   const { start, pointers } = this.state;
  //   while (start != null) {
  //     const nodeValue = await new Promise((res) => {
  //       setTimeout(() => {
  //         res(
  //           <>
  //             <LLNode
  //               value={start.value}
  //               pointedBy={
  //                 start === pointers.prev
  //                   ? 'pre'
  //                   : start === pointers.current
  //                   ? 'current'
  //                   : start === pointers.succ
  //                   ? 'succ'
  //                   : ''
  //               }
  //             />
  //             {start.next !== null ? <Arrow direction='right' /> : null}
  //           </>
  //         );
  //       });
  //     });
  //   }
  // }

  // reverseLL() {}

  // setInputData() {}

  render() {
    // const { canReverse, start, inputData } = this.state;
    return (
      // <div>
      //   <div className='userInput'>
      //     {/* <input
      //       disabled={!canReverse}
      //       placeholder='Enter comma-separated values...'
      //       value={inputData}
      //       onChange={(e) => this.setInputData(e.target.value)}
      //     ></input> */}
      //     <button disabled={!canReverse} onClick={() => this.handleData()}>
      //       Submit
      //     </button>
      //   </div>
      //   <div className='linkedList'></div>
      //   {!canReverse ? (
      //     <div className='labelRow'>
      //       <div className='label'>
      //         <div className='pre'></div>
      //         <span className='labelNode'>Previous Node</span>
      //       </div>
      //       <div className='label'>
      //         <div className='current'></div>
      //         <span className='labelNode'>Current Node</span>
      //       </div>
      //       <div className='label'>
      //         <div className='succ'></div>
      //         <span className='labelNode'>Next Node</span>
      //       </div>
      //     </div>
      //   ) : null}
      //   <div className='buttonWrapper'>
      //     <button disabled={!canReverse} onClick={() => this.reverseLL(start)}>
      //       Reverse
      //     </button>
      //   </div>
      // </div>
      <div>ss</div>
    );
  }
}
