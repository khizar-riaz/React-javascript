import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header'  //rfc default function import without brackets
import { Todos } from "./MyComponents/Todos"; //rafc  const function import with brackets and spece between
import { Footer  } from "./MyComponents/Footer";
function App() {
  return (
    <>
      <Header title="TO DO LIST" searchBar={true}/>
      <Todos/>
      <Footer/>
      
    </>
  );
}

export default App;
