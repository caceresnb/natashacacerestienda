import Navbar from "./components/Navbar/Navbar";
import ItemCount from "./components/ItemListContainer/ItemCount";

function App() {
  return (
    <>
      <Navbar/>
      <ItemCount stock="12"initial="1"/>
    </>
  );
}

export default App;