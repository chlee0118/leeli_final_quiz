import { Link } from "react-router-dom";
import ModuleList from "../Modules/List";


function Home() {
  return (
    <div className="d-flex">
        <div
          className="overflow-y-scroll position-fixed bottom-0 end-0"
          style={{ left: "320px", top: "250px" }} >
            <div className="row">
                <div className="col-8">
      <ModuleList />
      </div>
      <div className="col-2">
            <button type="button" style={{width: "200px"}}>Import Existing Content</button>
            <button type="button" style={{width: "200px"}}>Import From Commons</button>
            <button type="button" style={{width: "200px"}}>Choose Home Page</button>
            <button type="button" style={{width: "200px"}}>View Course Stream</button>
            <button type="button" style={{width: "200px"}}>New Announcements</button>
            <button type="button" style={{width: "200px"}}>New Analytics</button>
            <button type="button" style={{width: "200px"}}>View Course Notifications</button>
            <br />
            <br />
            <h4 style={{top:"100px"}}>To Do</h4>
            <hr />
            <div>
                <div className="head" style={{color:"red"}}>
                    A1 - ENV + HTML
                </div>
                <p>100 pts- mmddtime</p>
                <div className="head" style={{color:"red"}}>
                    A2 - CSS + BOOTSTRAP
                </div>
                <p>100 pts- mmddtime</p>
            </div>
          </div>
          </div>
    </div>
    </div>
  );
}
export default Home;