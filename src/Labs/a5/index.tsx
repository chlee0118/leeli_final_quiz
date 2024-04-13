import EncodingParametersInURLs from "./EncodingParametersInURLs";
import WorkingWithObjects from "./WorkingWithObjects";
import WorkingWithArrays from "./WorkingWithArrays";
const API_BASE = "https://kanbas-node-server-app-1-2zms.onrender.com/";
function Assignment5() {
  
  return (
    <div>
      <h1>Assignment 5</h1>
      <a href={API_BASE + "/a5/welcome"}>Welcome</a>
      <EncodingParametersInURLs />
      <WorkingWithObjects />
      <WorkingWithArrays />
    </div>
  );
}
export default Assignment5;
