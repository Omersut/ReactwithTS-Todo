import React, { useEffect, useState } from "react";
import { ITask } from "../Interfaces"

interface Props {
  task: ITask;
  completeTask(taskNameToDelete: string): void;
}




const TodoTask = ({ task, completeTask }: Props) => {
  
    const [time, setTime] = useState<number>(Number(localStorage.getItem(`${task.taskName}`)) || task.deadline*24*60)
    
    
  
    useEffect(() => {
        setTimeout(() => {
            setTime(time-1) 
        }, 60000); 
        localStorage.setItem(`${task.taskName}`, JSON.stringify(time))
        
        
    }, [time])
    
   
  
     
  return (
    <div className="task">
      <div className="content">
        <span>{task.taskName}</span>
        <span>{time} minutes
 </span>
      </div>
      <button
        onClick={() => {
          completeTask(task.taskName);
        }}
      ><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="black" className="bi bi-trash2-fill" viewBox="0 0 16 16">
      <path d="M2.037 3.225A.703.703 0 0 1 2 3c0-1.105 2.686-2 6-2s6 .895 6 2a.702.702 0 0 1-.037.225l-1.684 10.104A2 2 0 0 1 10.305 15H5.694a2 2 0 0 1-1.973-1.671L2.037 3.225zm9.89-.69C10.966 2.214 9.578 2 8 2c-1.58 0-2.968.215-3.926.534-.477.16-.795.327-.975.466.18.14.498.307.975.466C5.032 3.786 6.42 4 8 4s2.967-.215 3.926-.534c.477-.16.795-.327.975-.466-.18-.14-.498-.307-.975-.466z"/>
    </svg>
      </button>
    </div>
  );
};

export default TodoTask;