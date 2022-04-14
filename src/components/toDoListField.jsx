import React from 'react';
import ToDoConverter from "./toDoConverter";

export default function ToDoListField({toDoList, onDeleteToDo}) {
    return (
        <section id="ToDoListContainer">
            {toDoList.map(toDo => {
                return (
                    <article className='toDoArticle' key={toDoList.indexOf(toDo)}>
                        <h2><label for={toDo} className="toDoMsg">{toDo}</label></h2>
                        <div id="toDoCheckboxAndDeleteToDoBtnContainer">
                            <input type="checkbox" name="toDoCheckBox" id={toDo} className="toDoCheckBox" />
                            <button onClick={() => onDeleteToDo(toDo)} className="toDoDeleteBtn">Delete</button>
                        </div>
                    </article>
                );
            })}
        </section>
    );

    function handleDeleteToDo(toDo) {
        toDoList.splice(toDoList.indexOf(toDo), 1); 
    }
}