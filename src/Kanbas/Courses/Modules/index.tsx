import ModuleList from "./List";
function Modules() {
  return (
    <div
    className="overflow-y-scroll position-fixed bottom-0 end-0"
    style={{ left: "320px", top: "250px" }} >
      <ModuleList />
    </div>
  );
}
export default Modules;