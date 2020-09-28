let tasks = []

const Task = (state =tasks, action)=>{
  switch (action.type) {
    case "LIST_TASKS":
      return [...state, action.tasks]
    case "ADD_TASK":
      return [...state, action.newtask]
    case "DELETE_TASK":
      return [...state.filter(p => p.id !== action.id)]
    case "UPDATE_TASK":
      return state.map((task) => (
        task.id=== action.task_id ? {...task, name: action.updatename, delivery_date:action.updatedeliverydate}: task
    ))
    case "FINISH_TASK":
      return state.map((task) => (
        task.id===action.task_id ? {...task, done: !task.done}: task
    ))
    default:
      return state
       
  }

}
export default Task