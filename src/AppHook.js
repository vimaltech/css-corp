import React, {
  useState, useEffect, useRef, memo,
} from 'react';
import Child1 from './Child1';

// Mounting
// 1. Constructor
// 2. getDerivedStateFromProps
// 3. render
// 4. componentDidMount(call only once)

// Updating
// 1. getDerivedStateFromProps
// 2. ShouldComponentUpdate
// 3. render
// 4. getSnapShotBeforeUpdate(not possible)
// 5. ComponentDidUpdate

// Unmounting
// 1. componentWillUnmount

// Error
// 1. getDerivedStateFromError(Not possible)
// 2. ComponentDidCatch(Not possible)

const AppHook = ({ i }) => {
  const [counter, setCounter] = useState(i);
  const [greet, setGreet] = useState('Hello');
  const isLoaded = useRef(false);
  const inputRef = useRef();

  // this function will call everytime when component state or prop value change
  //   useEffect(() => {
  //     console.log('component did mount');
  //     console.log('component did Update');
  //   }, []);

  useEffect(() => {
    console.log('component did mount');
    console.log('component did update for counter');
  }, [counter, greet]);

  //   useEffect(() => {
  //     setCounter(i);
  //     if (counter > 5) {
  //       setGreet('Hello');
  //     }
  //     if (counter < 5) {
  //       setGreet('Hola');
  //     }
  //   }, [i, counter]);

  // Component Did Mount
  useEffect(() => {
    console.log('component did mount');
    isLoaded.current = true;
  }, []);

  const increment = () => {
    setCounter((val) => val + 1);
  };

  const decrement = () => {
    // dont use this approach to set value base on old value
    setCounter(counter - 1);
  };

  const getTextValue = () => {
    console.log(inputRef.current.value);
  };

  return (
    <div>
      {counter < 10 && <Child1 />}
      <button className="btn-primary" type="button" onClick={increment}>
        Increment
      </button>
      <h1>{counter}</h1>
      <button className="btn-primary" type="button" onClick={decrement}>
        Decrement
      </button>
      <div>
        <h2>{greet}</h2>
        <button
          type="button"
          className="btn-primary"
          onClick={() => setGreet('hola')}
        >
          Change Greet Message
        </button>
      </div>
      <div>
        <input type="text" ref={inputRef} />
        <button type="button" className="btn-primary" onClick={getTextValue}>
          Get Text Value
        </button>
      </div>
    </div>
  );
};

export default memo(AppHook);
