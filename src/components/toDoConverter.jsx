import React from 'react';

export default function ToDoConverter(toDo, idxToDo) {
    return (
            <article key={idxToDo}>
                <p>{toDo}</p>
            </article>
    );
}