import React from 'react';
import Todo from './Todo'

const TodoList = ({ onChangeTask, addTaskToTasks, task, tasks, deleteTask, toggleEditTask,updateTask,toggleEditOff }) => {
    return (
        <div>
            <form onSubmit={addTaskToTasks}>
                <input onChange={onChangeTask} value={task.content} />
                <button type="submit">+</button>
            </form>
            {
                tasks.map(elTask => {
                    return (
                        <div key={elTask.id}>
                        
                            <Todo elTask={elTask}  deleteTask={deleteTask} toggleEditTask={toggleEditTask} updateTask={updateTask} toggleEditOff={toggleEditOff} />
                            <button onClick={(event) => deleteTask(event, elTask.id)}>X</button>
                            <button onClick={(event) => toggleEditTask(event, elTask)}>Edit</button>
                        </div>
                    )
                }

                )
            }

        </div>
    );
};

export default TodoList;