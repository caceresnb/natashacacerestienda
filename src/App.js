import './App.css';
import NavBar from './Components/Navbar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'

function App() {
  let styles = {
    backgroundColor: "#fff",
  }  
  return (
    <div className="App">
      <header style={styles}>
      <NavBar/>
      <ItemListContainer greeting = "Productos"/>
      </header>
    </div>
  );
}
export default App;
