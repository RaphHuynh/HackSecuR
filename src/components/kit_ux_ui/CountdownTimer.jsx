import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const eventDate = new Date('March 29, 2024 00:00:00').getTime();
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  function calculateTimeRemaining() {
    const now = new Date().getTime();
    const timeDifference = eventDate - now;

    if (timeDifference > 0) {
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      return {
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
      };
    } else {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000); // Mise à jour toutes les secondes

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='flex gap-2 justify-center items-center'>
      {timeRemaining.days > 0 && <aside className='text-5xl uppercase flex flex-col justify-center items-center bg-red-700/20 text-red-700/90 p-4 rounded-md'><h1>{timeRemaining.days}</h1><h1>jour(s)</h1></aside>}

      {timeRemaining.days > 0 && <h1 className='text-5xl uppercase text-red-700/90 p-4'>:</h1>}

      {timeRemaining.hours >= 0 && <aside className='text-5xl uppercase flex flex-col justify-center items-center bg-red-700/20 text-red-700/90 p-4 rounded-md'><h1>{timeRemaining.hours}</h1><h1>Heure(s)</h1></aside>}

      <h1 className='text-5xl uppercase text-red-700/90 p-4'>:</h1>

      {timeRemaining.minutes >= 0 && <aside className='text-5xl uppercase flex flex-col justify-center items-center bg-red-700/20 text-red-700/90 p-4 rounded-md'><h1>{timeRemaining.minutes}</h1><h1>Min(s)</h1></aside>}

      <h1 className='text-5xl uppercase text-red-700/90 p-4'>:</h1>
      
      {timeRemaining.seconds >= 0 && <aside className='text-5xl uppercase flex flex-col justify-center items-center bg-red-700/20 text-red-700/90 p-4 rounded-md'><h1>{timeRemaining.seconds}</h1><h1>Sec(s)</h1></aside>}

      {timeRemaining.days === 0 && timeRemaining.hours === 0 && timeRemaining.minutes === 0 && timeRemaining.seconds === 0 && (
        <p>L'événement est en cours!</p>
      )}
    </div>
  );
};

export default CountdownTimer;
