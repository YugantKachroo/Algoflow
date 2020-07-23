// import React, { Component } from 'react';
// import './LinkedList.css';
// import { Node } from './Utils/Node';
// import { Arrow } from './Utils/Arrow';
// import { LLNode } from './Utils/LLNode';
// import { ReverseLL } from './Reverse/ReverseLL';

// export default class LinkedList extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       canReverse: false,
//       start: null,
//       inputData: '1,2,3,4,5',
//       nodeValue: null,
//       reverse: false,
//       pointers: {},
//       linkedList: [],
//     };
//   }
//   componentDidMount() {
//     //this.handleData();
//   }

//   async handleData() {
//     const { inputData } = this.state;
//     const result = inputData.split(',');
//     //console.log(result);
//     const nodeList = result.map((value) => {
//       return new Node(value);
//     });
//     for (let i = 0; i < nodeList.length - 1; i++) {
//       nodeList[i].next = nodeList[i + 1];
//     }
//     nodeList[nodeList.length - 1].next = null;
//     const startVal = nodeList[0];
//     //console.log(startVal);
//     await this.setState({ start: startVal, inputData: '', canReverse: true });
//     //this.parseLL();
//   }

//   async parseLL() {
//     const { start, pointers } = this.state;
//     while (start != null) {
//       const nodeValue = await new Promise((res) => {
//         setTimeout(() => {
//           res(
//             <>
//               <LLNode
//                 value={start.value}
//                 pointedBy={
//                   start === pointers.prev
//                     ? 'pre'
//                     : start === pointers.current
//                     ? 'current'
//                     : start === pointers.succ
//                     ? 'succ'
//                     : ''
//                 }
//               />
//               {start.next !== null ? <Arrow direction='right' /> : null}
//             </>
//           );
//         });
//       });
//     }
//   }

//   reverseLL() {}

//   setInputData() {}

//   render() {
//     const { canReverse, start, inputData } = this.state;
//     return (
//       <div>
//         <div className='userInput'>
//           <input
//             disabled={!canReverse}
//             placeholder='Enter comma-separated values...'
//             value={inputData}
//             onChange={(e) => this.setInputData(e.target.value)}
//           ></input>
//           <button disabled={!canReverse} onClick={() => this.handleData()}>
//             Submit
//           </button>
//         </div>
//         <div className='linkedList'></div>
//         {!canReverse ? (
//           <div className='labelRow'>
//             <div className='label'>
//               <div className='pre'></div>
//               <span className='labelNode'>Previous Node</span>
//             </div>
//             <div className='label'>
//               <div className='current'></div>
//               <span className='labelNode'>Current Node</span>
//             </div>
//             <div className='label'>
//               <div className='succ'></div>
//               <span className='labelNode'>Next Node</span>
//             </div>
//           </div>
//         ) : null}
//         <div className='buttonWrapper'>
//           <button disabled={!canReverse} onClick={() => this.reverseLL(start)}>
//             Reverse
//           </button>
//         </div>
//       </div>
//     );
//   }
// }

import React, { useState, useEffect } from 'react';
import { Node } from './Utils/Node';
import { Arrow } from './Utils/Arrow';
import { LLNode } from './Utils/LLNode';
import { ReverseLL } from './Reverse/ReverseLL';
import './LinkedList.css';

const LinkedList1 = () => {
  const [start, setStart] = useState(null);
  const [pointers, setPointers] = useState({});
  const [llNodeValue, setLLNodeValue] = useState(null);
  const [reversedNodeMap, setReverseNodeMap] = useState(new Map());
  const [linkedList, setLinkedList] = useState([]);
  const [reverse, setReverse] = useState(false);
  const [canReverse, setCanReverse] = useState(false);
  const [inputData, setInputData] = useState('1,2,3,4,5');
  useEffect(() => {
    handleData();
  }, []);
  useEffect(() => {
    setLinkedList([]);
    setCanReverse(true);
    parseLL(start);
  }, [start]);
  useEffect(() => {
    if (reverse) {
      setLinkedList([]);
      setReverseNodeMap(new Map(reversedNodeMap.set(pointers.current, true)));
      parseSyncLL(start);
    }
  }, [pointers]);
  useEffect(() => {
    setLinkedList([...linkedList, llNodeValue]);
  }, [llNodeValue]);
  const isValidInput = () => {
    return new RegExp(/^([a-z0-9\s]+,)+([a-z0-9\s]+){1}$/i).test(inputData);
  };
  const handleData = () => {
    if (isValidInput()) {
      const result = inputData.split(',');
      let nodeList = result.map((value) => {
        return new Node(value);
      });
      for (let start = 0; start < nodeList.length; start++) {
        if (start !== nodeList.length - 1) {
          nodeList[start].next = nodeList[start + 1];
        }
      }
      nodeList[nodeList.length - 1].next = null;
      setStart(nodeList[0]);
      setInputData('');
    }
  };
  const parseLL = async (temp) => {
    while (temp !== null) {
      const llNodeValue = await new Promise((resolve) => {
        setTimeout(() => {
          resolve(
            <>
              <LLNode
                value={temp.value}
                pointedBy={
                  temp === pointers.pre
                    ? 'pre'
                    : temp === pointers.current
                    ? 'current'
                    : temp === pointers.succ
                    ? 'post'
                    : ''
                }
              />
              {temp.next !== null ? <Arrow direction='right' /> : null}
            </>
          );
        }, 200);
      });
      setLLNodeValue(llNodeValue);
      temp = temp.next;
    }
  };
  const parseSyncLL = async (temp) => {
    const result = [];
    while (temp !== null) {
      const arrow = reversedNodeMap.get(temp) ? (
        <Arrow direction='left' />
      ) : (
        <Arrow direction='right' />
      );
      const llNode = (
        <LLNode
          value={temp.value}
          pointedBy={
            temp === pointers.pre
              ? 'pre'
              : temp === pointers.current
              ? 'current'
              : temp === pointers.succ
              ? 'post'
              : ''
          }
        />
      );
      const llNodeValue = !reversedNodeMap.get(temp) ? (
        <>
          {llNode}
          {temp.next !== null ? arrow : null}
        </>
      ) : (
        <>
          {arrow}
          {llNode}
          {temp === pointers.current ? <div className='empty'></div> : null}
        </>
      );
      result.push(llNodeValue);
      temp = temp.next;
    }
    setLinkedList(result);
  };
  const reverseLL = async (temp) => {
    let pre = null;
    let current = temp;
    let succ = current.next;
    setReverse(true);
    setCanReverse(false);
    setPointers({ pre, current, succ });
    while (succ !== null) {
      let pointers = await new Promise((resolve) => {
        setTimeout(() => {
          pre = current;
          current = succ;
          succ = succ.next;
          resolve({ pre, current, succ });
        }, 2000);
      });
      setPointers(pointers);
    }
    setReverse(false);
    setReverseNodeMap(new Map());
    setLLNodeValue(null);
    setPointers({});

    setTimeout(() => {
      setStart(ReverseLL(temp));
    }, 2000);
  };
  return (
    <div>
      <br />
      <br />
      <div className='userInput'>
        <input
          disabled={!canReverse}
          placeholder='Enter comma-separated values'
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
        ></input>
        <button disabled={!canReverse} onClick={() => handleData()}>
          Submit
        </button>
      </div>
      <br />
      <div className='linkedList'>
        {linkedList && linkedList.map((llNode) => llNode)}
      </div>
      <br />
      {!canReverse ? (
        <div className='labelRow'>
          <div className='label'>
            <div className='pre'></div>
            <span className='labelNode1'>Previous Node</span>
          </div>
          <div className='label'>
            <div className='current'></div>
            <span className='labelNode1'>Current Node</span>
          </div>
          <div className='label'>
            <div className='post'></div>
            <span className='labelNode1'>Next Node</span>
          </div>
        </div>
      ) : null}
      <div className='buttonWrapper'>
        <button disabled={!canReverse} onClick={() => reverseLL(start)}>
          Reverse
        </button>
      </div>
    </div>
  );
};

export default LinkedList1;
