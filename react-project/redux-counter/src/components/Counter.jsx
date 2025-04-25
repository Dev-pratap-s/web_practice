import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../redux/slices/CounterSlice';

function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg text-center w-80">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Counter App</h1>

      <button
        onClick={() => dispatch(increment())}
        className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded transition-all"
      >
        Increment
      </button>

      <div className="text-3xl font-bold my-6 text-blue-700">{count}</div>

      <button
        onClick={() => dispatch(decrement())}
        className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded transition-all"
      >
        Decrement
      </button>
    </div>
  );
}

export default Counter;
