import { useRef } from 'react';
import { useCounter } from '../hooks/counter-hook';

export default (): JSX.Element => {
  const { count, clicks, handle_click } = useCounter();
  const count_element = useRef<HTMLHeadingElement>(null);

  return (
    <section>
      <h1>Counter page</h1>
      <p>This is a first step to learn Typescript by coding.</p>
      <hr />
      <h2 ref={count_element}>Counter: {count}</h2>
      <h2>Clicks: {clicks}</h2>
      <button onClick={() => handle_click(5)}>+1</button>
    </section>
  );
};