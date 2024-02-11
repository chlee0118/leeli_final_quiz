const AddingAndRemovingDataToFromArrays = () => {
  let numberArray1 = [1, 2, 3, 4, 5];
  let stringArray1 = ['string1', 'string2'];

  // Adding new items
  numberArray1.push(6);
  stringArray1.push('string3');

  // Removing items
  numberArray1.splice(2, 1); 
  stringArray1.splice(1, 1); 

  return (
    <div>
      <h3>Adding and Removing Data in Arrays</h3>
      <p>Number Array: {numberArray1.join('')}</p>
      <p>String Array: {stringArray1.join('')}</p>
    </div>
  );
}

export default AddingAndRemovingDataToFromArrays;
