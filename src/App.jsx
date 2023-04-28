import "./App.css";
import NavBar from "./components/Navbar/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
function App() {
return (
  <div>
    <NavBar />
    <ItemListContainer greeting={'Bienvenidos a PhoneGear'} />
  </div>
)
}

export default App;