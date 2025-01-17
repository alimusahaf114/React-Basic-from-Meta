import Apples from "./Apples";
function Bag() {
  const bag = {
    padding: "20px",
    border: "1px solid gray",
    background: "#fff",
    margin: "20px 0",
  };
  return (
    <div style={bag}>
      <Apples color="yellow" number="5"></Apples>
    </div>
  );
}
export default Bag;
