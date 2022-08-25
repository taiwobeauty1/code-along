import React from "react";
import {TrashIcon} from '@heroicons/react/outline'

function TaskItem({ task, handleDelete }) {
    return (
        <div className="flex items-center justify-between bg-rose-200 p-2 border-2 border-fuchsia-300 rounded-md">
            <div className="flex space -x-2">
            <input type="checkbox" name="" id="" checked={task.completed} onChange={() => {}} />
            <div className="flex-1">{task.text}</div>
            </div>

            <button className="bg-rose-800 p-2 rounded-md" onClick={() => handleDelete(task.id)}>
              <TrashIcon height={24} color="white" />
            </button>
        </div>
    );
};

export default TaskItem;