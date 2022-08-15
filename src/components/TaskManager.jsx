import React, {useState} from "react";
import TaskItem from "./TaskItem";
// import background from "../assets/background.";

function TaskManager() {
    const [tasks, setTasks] = useState([]);
    const [input, setInput] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
       if (input === "") return;

       setTasks([input, ...tasks]);
       setInput("");
    };

    const handleDelete = (idx) => {
        const newTasks = tasks.filter(task => task !== idx);
        setTasks(newTasks);
    }
    return (

        <div className="h-screen w-screen flex justify-center items-center rounded-xl px-5 py-10">
            <div className="max-w-xl w-full max-h-96 bg-white p-8 rounded-lg z-10">
                <form  className="space-x-5 flex w-[30rem] mb-10" onSubmit={handleSubmit}>
                    <input type="text" className="border-2 border-blue-400 p-2 rounded-md outline-none w-10/12" 
                    onChange={(e) => setInput(e.target.value)}/>
                    
                        <button type="submit" className="bg-blue-600 text-white text-lg py-2 px-7 rounded-md cursor-pointer"
                        disabled={input === ""} >
                        Add
                        </button>
                </form>

             <div className="space-y-2 overflow-y-auto h-56">
                {
                tasks.map((task) => ( 
                
                <TaskItem task={task} handleDelete={handleDelete} />
                ))}
             </div>
              </div>
              </div>
    );
};
export default TaskManager;