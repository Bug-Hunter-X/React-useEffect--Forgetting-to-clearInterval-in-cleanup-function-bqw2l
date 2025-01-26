useEffect(() => {
  const intervalId = setInterval(() => {
    console.log('Hello');
  }, 1000);

  return () => {
    clearInterval(intervalId);
  };
}, []);