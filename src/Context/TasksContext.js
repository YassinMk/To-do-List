import React, { createContext, useContext, useState } from "react";

export const TaskContext = createContext();


export const TaskProvider = ({ children }) => {
  const [deletedTaskId, setDeletedTaskId] = useState(null);
  const [task, setTask] = useState({});

  const deleteTask = (id) => {
    setDeletedTaskId(id);
  };
  const addTask = (newtask) => {
    setTask(newtask);
  }

  return (
    <TaskContext.Provider value={{ deletedTaskId, deleteTask,addTask,task}}>
      {children}
    </TaskContext.Provider>
  );
};

export const useDeleteTask = () => {
  const context = useContext(TaskContext);

  if (context === undefined) {
    throw new Error("useDeleteTask must be used within a TaskProvider");
  }

  return context;
};
export const useAddTask=()=>{
  const  context=useContext(TaskContext)

  if (context === undefined) {
    throw new Error("useDeleteTask must be used within a TaskProvider");
  }

  return context;
}
