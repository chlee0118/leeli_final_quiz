function add(a: number, b: number) {
    return a + b;
  }
  
  // Define a functional component
  const MyComponent = () => {
    // Use the add function
    const twoPlusFour = add(2, 4);
  
    // Return JSX content
    return (
      <>
        <h2>Functions</h2>
        <h3>Legacy ES5 functions</h3>
        twoPlusFour = { twoPlusFour }<br />
        add(2, 4) = { add(2, 4) }<br />
      </>
    );
  }
  
  export default MyComponent;