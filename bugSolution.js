```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct: This effect runs only once after the initial render
    // because an empty array [] is provided as a dependency.
    // For effect that needs to run after each update, include count as dependency
    // useEffect(() => {setCount(count + 1)}, [count]);
    console.log('Effect ran!');
  }, []);

  return <div>Count: {count}</div>;
}
```