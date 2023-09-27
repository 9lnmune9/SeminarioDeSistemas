import React from 'react';
import { useCounter } from '../hooks/useCounter';


export const DrawComponent = () => {
    const [imageNumber, , ,] = useCounter(6, { max: 6, min: 0 }); 

    return (
      <div>
        <img src={`/assets/img${imageNumber}.png`} alt="test" />
        { }
      </div>
    );
  };
  