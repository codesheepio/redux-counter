import React from 'react'

const Counter = ({ counter, increaseCounter, decreaseCounter }) =>
  <div>
    <span style={{ fontSize: '20px', marginRight: '10px' }}>
      {counter}
    </span>
    <input type="button" value="+" onClick={() => increaseCounter(1)} />
    <input type="button" value="-" onClick={() => decreaseCounter(1)} />
  </div>

export default Counter
