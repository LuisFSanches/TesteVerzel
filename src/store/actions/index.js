export const addUser = () => {
  return {
    type: "ADD_USER",
  };
};

export const listTasks = ()=>{
  return{
    type: "LIST_TASKS"
  }
}
export const addTask = () => {
  return {
    type: "ADD_TASK",
  };
}
export const deleteTask = () =>{
  return {
    type:"DELETE_TASK",
  }
};
export const authentication = ()=>{
  return{
    type: "IS_AUTH"
  }
}
export const updateTask = ()=>{
  return{
    type:"UPDATE_TASK"
  }
}
export const finishTask = ()=>{
  return{
    type:"FINISH_TASK"
  }
}