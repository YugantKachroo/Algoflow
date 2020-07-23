import React from 'react';
import './LLNode.css';
export const LLNode = (props) => {
  const { value, pointedBy } = props;
  return (
    <div className={`llNode ${pointedBy}`}>
      <span>{value}</span>
    </div>
  );
};
