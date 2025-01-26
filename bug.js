useEffect(() => {
  // Incorrect usage of the return value of setInterval
  const intervalId = setInterval(() => {
    console.log('Hello');
  }, 1000);

  // Missing cleanup function to clear the interval
  return () => {
    //clearInterval(intervalId);
  };
}, []);