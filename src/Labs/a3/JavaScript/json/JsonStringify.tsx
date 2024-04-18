function JsonStringify() {
    const squares = [1, 4, 9, 16, 25, 36];
    return (
      <>
        <h3>JSON Stringify</h3>
        <p>squares = {JSON.stringify(squares)}</p>
      </>
    );
  }
  
  export default JsonStringify;