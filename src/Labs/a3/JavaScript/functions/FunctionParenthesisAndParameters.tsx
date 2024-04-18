const square  = (a: number) => a * a;
const plusOne = (a: number) => a + 1;
const FunctionParenthesisAndParameters = () => {
  // Use the functions
  const twoSquared = square(2);
  const threePlusOne = plusOne(3);

  // Return JSX content
  return (
    <div>
      <h3>Function Parenthesis and Parameters</h3>
      <p>twoSquared = {twoSquared}</p>
      <p>square(2) = {twoSquared}</p>
      <p>Three plus one = {threePlusOne}</p>
      <p>plusOne(3) = {threePlusOne}</p>
    </div>
  );
}

export default FunctionParenthesisAndParameters;