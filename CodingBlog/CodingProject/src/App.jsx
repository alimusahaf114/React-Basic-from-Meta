import Nav from "./Components/Nav";
import Promo from "./Components/Promo";
import Intro1 from "./Components/Intro1";
import Intro2 from "./Components/Intro2";
import Intro3 from "./Components/Intro3";
import Footer from "./Components/Footer";
import Bag from "./MetaCodeComponent/Bag";
import Apples from "./MetaCodeComponent/Apples";
import Example from "./MetaCodeComponent/Example";
import "./App.css";

function App() {
  const bool = false;
  return (
    <>
      <Example toggleBoolean={!bool} />
      <Bag />
      {/* <Nav></Nav>
      <Promo></Promo>
      <Intro1></Intro1>
      <Intro2></Intro2>
      <Intro3></Intro3>
      <Footer></Footer> */}
    </>
  );
}

export default App;
