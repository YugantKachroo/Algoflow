import React, { useState, useEffect } from 'react';

import './LinearSearch.css';
import { Button, Input, Divider } from 'semantic-ui-react';

const LinearSearch = () => {
  const [array, setArray] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [target, setTarget] = useState(-1);
  const [resultIndex, setResultIndex] = useState(-1);

  const generateArray = () => {
    var tempArray = [];
    for (var i = 0; i < 20; i++) {
      var number = Math.floor(Math.random() * 100 + 1);
      tempArray.push(number);
    }
    setArray(tempArray);
  };

  // Component Did Mount
  useEffect(() => {
    generateArray();
  }, []);

  const sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };

  const handleChange = (e) => {
    setTarget(e.target.value);
  };

  const linearSearch = async () => {
    for (var i = 0; i < array.length; i++) {
      setCurrentIndex(i);
      await sleep(1000);
      setCurrentIndex(i + 1);
      if (array[i] === parseInt(target)) {
        setCurrentIndex(i);
        setResultIndex(i);
        break;
      }
    }
  };
  return (
    <div>
      <Button primary onClick={generateArray}>
        Generate new array
      </Button>
      <div className='formWrapper'>
        <Input
          focus
          placeholder='Element to be found'
          className='inputField'
          onChange={handleChange}
        />
        <Button color='green' onClick={linearSearch}>
          Visualize
        </Button>
      </div>
      <div className='node-wrapper'>
        {array.map((value, index) => {
          return (
            <div
              key={index}
              className={index === currentIndex ? 'node currentNode' : 'node'}
            >
              {value}
            </div>
          );
        })}
      </div>

      {resultIndex === -1 ? (
        <div>
          <Divider />
          <p>
            <b>Result</b> : Not Found
          </p>
        </div>
      ) : (
        <div>
          <Divider />
          <p>
            <b>Result</b> : Found at index {resultIndex}
          </p>
        </div>
      )}
    </div>
  );
};

export default LinearSearch;
