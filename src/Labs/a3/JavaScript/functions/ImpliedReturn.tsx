const multiply = (a: number, b: number) => a * b;

const ImpliedReturn = () => {
  // Use the multiply function
  const fourTimesFive = multiply(4, 5);

  // Return JSX content
  return (
    <>
      <h3>ES6 Implied Returns</h3>
      fourTimesFive = {fourTimesFive}<br />
      multiply(4, 5) = {multiply(4, 5)}<br />
    </>
  );
}

export default ImpliedReturn;