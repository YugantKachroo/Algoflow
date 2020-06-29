import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

{
  /* <>
<div
  className='array-container'
  style={{
    position: 'absolute',
    right: `0px`,
    left: '0px',
    top: '80px',
  }}
>
  {array.map((value, idx) => (
    <div
      className='array-bar'
      key={idx}
      style={{
        backgroundColor: PRIMARY_COLOR,
        height: `${value}px`,
      }}
    ></div>
  ))}
</div>
<div className='buttons'>
  <button
    title='Generates a new random array'
    style={{
      position: 'absolute',
      top: `${(0.25 * (WINDOW_HEIGHT - 20)) / TOTAL_BUTTONS}px`,
      left: `${(0 * (WINDOW_HEIGHT - 20)) / TOTAL_BUTTONS}px`,
    }}
    onClick={() => this.Arrayreset()}
  >
    Generate New Array
  </button>
  <button
    title='O(NlogN) Time Complexity'
    id='mergeSort'
    style={{
      position: 'absolute',
      top: `${(0.25 * (WINDOW_HEIGHT - 20)) / TOTAL_BUTTONS}px`,
      left: `${(1.75 * (WINDOW_HEIGHT - 20)) / TOTAL_BUTTONS}px`,
    }}
    onClick={() => this.mergeSort()}
  >
    Merge Sort
  </button>
  <button
    title='O(N^2) Time Complexity'
    id='quickSort'
    style={{
      position: 'absolute',
      top: `${(0.25 * (WINDOW_HEIGHT - 20)) / TOTAL_BUTTONS}px`,
      left: `${(2.9 * (WINDOW_HEIGHT - 20)) / TOTAL_BUTTONS}px`,
    }}
    onClick={() => this.quickSort()}
  >
    Quick Sort
  </button>
  <button
    title='O(N^2) Time Complexity'
    id='bubbleSort'
    style={{
      position: 'absolute',
      top: `${(0.25 * (WINDOW_HEIGHT - 20)) / TOTAL_BUTTONS}px`,
      left: `${(4.05 * (WINDOW_HEIGHT - 20)) / TOTAL_BUTTONS}px`,
    }}
    onClick={() => this.bubbleSort()}
  >
    Bubble Sort
  </button>
  <button
    title='O(N^2) Time Complexity'
    id='insertionSort'
    style={{
      position: 'absolute',
      top: `${(0.25 * (WINDOW_HEIGHT - 20)) / TOTAL_BUTTONS}px`,
      left: `${(5.2 * (WINDOW_HEIGHT - 20)) / TOTAL_BUTTONS}px`,
    }}
    onClick={() => this.insertionSort()}
  >
    Insertion Sort
  </button>
  <button
    title='O(NlogN) Time Complexity'
    id='heapSort'
    style={{
      position: 'absolute',
      top: `${(0.25 * (WINDOW_HEIGHT - 20)) / TOTAL_BUTTONS}px`,
      left: `${(6.35 * (WINDOW_HEIGHT - 20)) / TOTAL_BUTTONS}px`,
    }}
    onClick={() => this.heapSort()}
  >
    Heap Sort
  </button>
  <button
    title='O(N^2) Time Complexity'
    id='selectionSort'
    style={{
      position: 'absolute',
      top: `${(0.25 * (WINDOW_HEIGHT - 20)) / TOTAL_BUTTONS}px`,
      left: `${(7.5 * (WINDOW_HEIGHT - 20)) / TOTAL_BUTTONS}px`,
    }}
    onClick={() => this.selectionSort()}
  >
    Selection Sort
  </button>
</div>
</> */
}
