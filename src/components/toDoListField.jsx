import React from 'react';
import ToDoConverter from "./toDoConverter";

export default function ToDoListField({toDoList, onDeleteToDo}) {
    return (
        <section id="ToDoListContainer">
            {toDoList.map(toDo => {
                return (
                    <ToDoConverter
                    key={toDoList.indexOf(toDo)}
                    toDo={toDo}
                    idxToDo={toDoList.indexOf(toDo)}
                    onDeleteToDo={onDeleteToDo}
                    />  
                );
            })}
        </section>
    );
}