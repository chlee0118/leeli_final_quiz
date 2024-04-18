import React from "react";
import ReduxExamples from "./ReduxExamples";
import PassingFunctions from "./PassingFunctions";
import EventObject from "./EventObject";
import PassingDataOnEvent from "./PassingDataOnEvent";
import Counter from "./Counter";
import BooleanStateVariables from "./BooleanStateVariables";
import StringStateVariables from "./StringStateVariables";
import DateStateVariable from "./DateStateVariable";
import ObjectStateVariable from "./ObjectStateVariable";
import ArrayStateVariable from "./ArrayStateVariable";
import ParentStateComponent from "./ParentStateComponent";

function Assignment4() {
  function sayHello() {
    alert("Hello");
  }
  return (
    <div>
      <h1>Assignment 4</h1>
      <ReduxExamples/>
      <PassingDataOnEvent/>
      <br/>
      <PassingFunctions theFunction={sayHello} />
      <br/>
      <EventObject/>
      <br/>
      <Counter/>
      <BooleanStateVariables/>
      <StringStateVariables/>
      <DateStateVariable/>
      <ObjectStateVariable/>
      <ArrayStateVariable/>
      <ParentStateComponent/>
      
    </div>
  );
}
export default Assignment4;