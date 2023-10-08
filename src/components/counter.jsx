import {React, useState } from 'react';

const counter = ({bread}) => {
  const [count, setCount] = useState(0);

  return (
    <div className="m-3 mb-7">
      <div className="flex">
        <p className="pr-2 font-bold text-sm">{bread}</p>
        <p>{count}</p>
      </div>
      <button className="bg-gray-100 hover:bg-gray-300 mr-2" onClick={() => setCount(count + 1)}>
        +
      </button>
      <button className="bg-gray-100 hover:bg-gray-300" onClick={() => setCount(count - 1)}>
        -
      </button>
    </div>
  )
}

export default counter