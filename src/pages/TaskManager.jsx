import React, { useState, useEffect } from "react";
import TaskItem from "../components/TaskItem";
import { v4 as uuid } from "uuid";
import { useTaskContext } from "../context/tasks.Context";

// import background from "../assets/background.";

function TaskManager() {
   const { tasks, setValue } = useTaskContext ();
    const [input, setInput] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
       if (input === "") return;

       const newTasks = {
        id: uuid(),
        text: input,
        completed: false,
    };

       setValue([newTasks, ...tasks]);
       setInput("");
    };

    const handleDelete = (id) => {
        const newTasks = tasks.filter((task) => task.id !== id);
        setValue(newTasks);
    };

    const handleCompleted = (id) => {
        const newTasks = tasks.map((task) => {
            if (task.id === id) {
                return {
                    ...task,
                    completed: !task.completed,
                };
            }
            return task;
        });
        setValue(newTasks);
    };

    const handleEdit = (id) => {
        const newTasks = tasks.filter((task) => {
            if (task.id === id) {
                setInput(task.text);
            return false;
            }
            return task;
        });
        setValue(newTasks);
    };

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    return (

        <div className="h-screen w-screen bg-cyan-500 flex justify-center items-center rounded-xl px-5 py-10">
            <div className="max-w-xl w-full max-h-96 bg-white p-8 rounded-xl px-5 py-10">
                <form  className="space-x-5 flex w-[30rem] mb-10" onSubmit={handleSubmit}>
                    <input type="text" className="border-2 border-cyan-500 p-2 rounded-md outline-none w-10/12" 
                    onChange={(e) => setInput(e.target.value)}
                    value={input} />
                    
                        <button type="submit" className= "bg-cyan-700 text-white text-lg py-2 px-7 rounded-md cursor-pointer"
                        disabled={input === ""} >
                        Add
                        </button>
                </form>

             <div className="space-y-2 overflow-y-auto h-56">
                {tasks.map((task) => ( 
                <TaskItem key={task.id} task={task}
                handleDelete={handleDelete}
                handleCompleted={handleCompleted}
                handleEdit={handleEdit} />
                ))}
             </div>
              </div>
              </div>
    );
};
export default TaskManager;