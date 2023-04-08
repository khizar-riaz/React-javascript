import logo from "./logo.svg";
import "./App.css";
import Header from "./MyComponents/Header"; //rfc default function import without brackets
import { Todos } from "./MyComponents/Todos"; //rafc  const function import with brackets and spece between
import { Footer } from "./MyComponents/Footer";
import { AddTodo } from "./MyComponents/AddTodo";
import { About } from "./MyComponents/About";
import React, { useState } from "react"; //hooks let you use state and other React features without writing a class.
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"; //for react routers and use routes instead of switches
function App() {
  const onDelete = (todo) => {
    console.log("I am on delete", todo);
    //deleting will not work in this way
    // let index = todos.indexOf(todo);
    // todos.splice(index,1);
    setTodos(
      todos.filter((e) => {
        //filter is an higher order array method
        return e !== todo;
      })
    );
  };
  const addTodo = (title, desc) => {
    console.log("I am adding todo", title, desc);
    let sno;
    if (todos.length == 0) {
      sno = 1;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };

    setTodos([...todos, myTodo]);
    console.log(myTodo);
  };
  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "go to the market",
      desc: "you need to go to the edeka",
    },
    {
      sno: 2,
      title: "go to the market",
      desc: "you need to go to the netto",
    },
    {
      sno: 3,
      title: "go to the market",
      desc: "you need to go to the penny",
    },
  ]);
  return (
    <>
      <Router>
        <Header title="TO DO LIST for me" searchBar={true} />
        <Routes>
          <Route
            exact
            path="/"
            render={() => {
              return (
                <>
                  <AddTodo addTodo={addTodo} />
                  <Todos todos={todos} onDelete={onDelete} />
                </>
              );
            }}
          ></Route>
          <Route exact path="/about" element={<About />} />

          {/* <Route exact path="/about"> 
          <About />   
          </Route> */}
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
