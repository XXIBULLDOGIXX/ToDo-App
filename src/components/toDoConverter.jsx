import React, {useState} from 'react';


export default function ToDoConverter({toDo, onDeleteToDo}) {
    const [toDoChecked, setToDoChecked] = useState(false)

    return (
        <article className='toDoArticle'>
            <h2><label htmlFor={toDo} className={toDoCheckedFormatter()}>{toDo}</label></h2>
            <div id="toDoCheckboxAndDeleteToDoBtnContainer">
                <input onClick={handleToDoChecked} type="checkbox" name="toDoCheckBox" id={toDo} className="toDoCheckBox" />
                <button onClick={() => onDeleteToDo(toDo)} className="toDoDeleteBtn">Delete</button>
            </div>
        </article>
    );

    function handleToDoChecked() {
        toDoChecked ? setToDoChecked(false) : setToDoChecked(true)
    }

    function toDoCheckedFormatter() {
        return toDoChecked ? "toDoMsg checked" : "toDoMsg";
    }
}