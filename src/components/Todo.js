import React from 'react';

import classes from './Todo.module.css'

const Todo = ({ elTask, updateTask, toggleEditOff }) => {

        return   <input className={classes.Input} onChange={(event) => updateTask(event, elTask)} value={elTask.content} />
     
};

export default Todo;