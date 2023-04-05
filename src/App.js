import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header'  //rfc default function import without brackets
import { Todos } from "./MyComponents/Todos"; //rafc  const function import with brackets and spece between
import { Footer  } from "./MyComponents/Footer";
function App() {
  let todos = [
    {
      sno: 1,
      title: "go to the market",
      desc:"you need to go to the edeka"
    },
    {
      sno: 1,
      title: "go to the market",
      desc:"you need to go to the netto"
    },
    {
      sno: 1,
      title: "go to the market",
      desc:"you need to go to the penny"
    },

  ]
  return (
    <>
      <Header title="TO DO LIST" searchBar={true}/>
      <Todos todos={todos}/>
      <Footer/>
      
    </>
  );
}

export default App;
