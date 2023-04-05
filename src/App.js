import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header'  //rfc default function import without brackets
import { Todos } from "./MyComponents/Todos"; //rafc  const function import with brackets and spece between
import { Footer  } from "./MyComponents/Footer";
function App() {
  const onDelete =(todo) =>{
   
    console.log("I am on delete", todo)
  }
  let todos = [
    {
      sno: 1,
      title: "go to the market",
      desc:"you need to go to the edeka"
    },
    {
      sno: 2,
      title: "go to the market",
      desc:"you need to go to the netto"
    },
    {
      sno: 3,
      title: "go to the market",
      desc:"you need to go to the penny"
    },

  ]
  return (
    <>
      <Header title="TO DO LIST" searchBar={true}/>
      <Todos todos={todos} onDelete={onDelete}/>
      <Footer/>
      
    </>
  );
}

export default App;
