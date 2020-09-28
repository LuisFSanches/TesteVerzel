import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { MdDelete, MdRemoveRedEye, MdDone, MdModeEdit } from "react-icons/md";

import "./style.css";
export default function TaskList() {
  const tasks = useSelector((state) => state.Task);
  const user_id = localStorage.getItem("logged_user");

  const dispatch = useDispatch();

  const deleteTask = (id) => {
    tasks.map((task) => {
      if (task.user_id === user_id) {
        dispatch({ type: "DELETE_TASK", id: id });
      }
    });
  };

  const finishTask = (id) =>{
    tasks.map((task) => {
      if(task.done === false){
        if (task.user_id === user_id) {
          dispatch({ type: "FINISH_TASK", task_id: id });
        }
      }
    });
  }

  return (
    <div className="tasklist-container">
      <table className="tasks-table">
        <thead>
          <tr>
            <th>Tarefa</th>
            <th>Data de Entrega</th>
            <th>Data de Conclusão</th>
            <th>Editar</th>
            <th>Excluir</th>
            <th>Visualizar</th>
            <th>Concluir</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => {
            if (task.user_id === user_id) {
              return (
                <tr key={task.id} className= {task.done === true ? "task_finished": ""}>
                  <td >{task.name}</td>
                  <td >{task.delivery_date}</td>
                  <td>{task.conclusion_date}</td>
                  <td>
                    <Link to={{ pathname: `dashboard/update/${task.id}` }}>
                      <MdModeEdit size={20} color="#533829" />
                    </Link>
                  </td>
                  <td>
                    <button onClick={() => deleteTask(task.id)}>
                      <MdDelete size={20} color="red" />
                    </button>
                  </td>
                  <td>
                    <MdRemoveRedEye size={20} color="#419099" />
                  </td>
                  <td>
                    <button onClick={()=> finishTask(task.id)}>
                    <MdDone size={20} color="#199844" />
                    </button>
                 
                  </td>
                </tr>
              );
            }
          })}
        </tbody>
      </table>
    </div>
  );
}
