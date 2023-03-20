import { useRef } from 'react';
import { useCounter } from '../hooks/counter-hook';

export default (): JSX.Element => {
  const { count, clicks, handle_click } = useCounter();
  const count_element = useRef<HTMLHeadingElement>(null);

  return (
    <>
      <h1 ref={count_element}>Counter: {count}</h1>
      <h1>Clicks: {clicks}</h1>
      <button onClick={() => handle_click(5)}>+1</button>
    </>
  )
};