import React, {useState, useEffect} from 'react';

export default function ToDoListHeader() {
    

    return (
        <div id="toDoListHeaderContainer">
            <h1 id="titleToDoApp">ToDo App</h1>
            <form id="addToDoForm" action="/submit">
                <input id="inputToDo" type="text" />
                <div id="btnsContainerToDoApp">
                    <button class="todoBtn" id="addToDoBtn" type="submit">Add ToDo</button>
                    <button class="todoBtn" id="DeleteAllToDoesBtn" type="reset">Delete all</button>
                </div>
            </form>
        </div>
    );
}