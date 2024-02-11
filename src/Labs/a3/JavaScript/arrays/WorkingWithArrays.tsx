import ArrayIndexAndLength from './ArrayIndexAndLength';
import AddingAndRemovingDataToFromArrays from './AddingAndRemovingDataToFromArrays';
import ForLoops from './ForLoops'; 
import MapFunction from './MapFunction'; 
import FindIndex from './FindIndex';
import FilterFunction from './FilterFunction';

const WorkingWithArrays = () => {
  var functionScoped = 2;
  let blockScoped = 5;
  const constant1 = functionScoped - blockScoped;
  let numberArray1 = [1, 2, 3, 4, 5];
  let stringArray1 = ['string1', 'string2'];

  let variableArray1 = [
    functionScoped, blockScoped,
    constant1, numberArray1.join(""), stringArray1.join("")
  ];

  return (
    <div>
      <h2>Working with Arrays</h2>
      <p>numberArray1: {numberArray1.join(', ')}</p>
      <p>stringArray1: {stringArray1.join(', ')}</p>
      <pre>variableArray1: {variableArray1.join("")}</pre>
      <ArrayIndexAndLength />
      <AddingAndRemovingDataToFromArrays />
      <ForLoops />
      <MapFunction />
      <FindIndex/>
      <FilterFunction/>
    </div>
  );
}

export default WorkingWithArrays;
