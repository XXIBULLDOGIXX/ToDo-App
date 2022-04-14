import React, {useState, useEffect} from 'react';
import ToDoListHeader from "./components/toDoListHeader"
import ToDoListField from "./components/toDoListField"
import './App.css';

function App() {
  const [toDo, setToDo] = useState("");
  const [toDoList, setToDoList] = useState([]);

  return (
    <>
      <ToDoListHeader/>
      <form onSubmit={handleSubmitToDo} id="addToDoForm" action="/submit">
        <input onChange={handleInputTodo} id="inputToDo" type="text" />
        <div id="btnsContainerToDoApp">
            <button onClick={handleAddToDo} className="todoBtn" id="addToDoBtn" type="submit">Add ToDo</button>
            <button onClick={handleDeleteAllToDo} className="todoBtn" id="DeleteAllToDoesBtn" type="reset">Delete all</button>
        </div>
      </form>
      <ToDoListField toDoList={toDoList} onDeleteToDo={handleDeleteToDo} />
    </>
  );

  function handleSubmitToDo(e) {
    e.preventDefault()
  }

  function handleInputTodo(e) {
    const toDoFromInput = e.target.value
    setToDo(toDoFromInput)
  }

  function handleAddToDo() {
    if (toDoList.filter(toDoFromFilter => toDoFromFilter !== toDo).length === toDoList.length) {
      setToDoList([...toDoList, toDo])
    }
    else alert("You can't have multiple times the same ToDo.")
  }

  function handleDeleteAllToDo() {
    setToDoList([])
  }

  function handleDeleteToDo(toDo) {
    setToDoList([...toDoList.filter(toDoFromFilter => toDoFromFilter !== toDo)])
}
}

export default App;
