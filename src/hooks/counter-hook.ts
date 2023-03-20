import { useState } from 'react';

interface CounterState {
  count: number,
  clicks: number,
};

export const useCounter = () => {
  const [{ count, clicks }, set_counter] = useState<CounterState>({
    count: 0,
    clicks: 0,
  });

  const handle_click = (value: number) => {
    set_counter((prev) => {
      return {
        count: prev.count + value,
        clicks: prev.clicks + 1,
      };
    });
  };

  return {
    count,
    clicks,
    handle_click
  };
};