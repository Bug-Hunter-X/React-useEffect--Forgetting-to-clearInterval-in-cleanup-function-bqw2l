# React useEffect: Forgetting to clearInterval
This example demonstrates a common mistake in React's `useEffect` hook: forgetting to clear an interval using `clearInterval` in the cleanup function.  This can cause memory leaks and unexpected behavior. The solution shows the correct implementation, ensuring the interval is cleared when the component unmounts or when the dependency array changes. 