import React,{useState} from 'react'
import {useParams,withRouter} from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import './style.css'
function UpdateTask({history}) {

  const tasks = useSelector((state) => state.Task);
  const dispatch = useDispatch();
  const {id} = useParams()
  const task_id = parseInt(id)
 
  const user_id = parseFloat(localStorage.getItem("logged_user"))
  
  const [name, setName] = useState(tasks.map((task)=>{
      return task.name
  }))
  const [delivery_date, setDeliveryDate] = useState(tasks.map((task)=>{
    return task.delivery_date
  }))
  const [conclusion_date, setConclusionDate] = useState(tasks.map((task)=>{
    return task.conclusion_date
  }))


  const onSubmit = (e) =>{
    e.preventDefault()
   

      dispatch({type:"UPDATE_TASK",
      task_id:task_id, 
      updatename:name, 
      updatedeliverydate: delivery_date, 
      updateconclusiondate:conclusion_date,
    })
      history.push('/dashboard')
    }
  

  return (
    <div className="update-container">
      <h1>Editar Tarefa</h1>
      <form action="" onSubmit = {onSubmit}>
          <div className="field">
              <label htmlFor="name">Nome</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
           </div>

           <div className="field">
              <label htmlFor="delivery_date">Data de Entrega</label>
              <input
                type="date"
              
                value={delivery_date}
                onChange={(e) => setDeliveryDate(e.target.value)}
              />
           </div>

           <div className="field">
              <label htmlFor="conclusion_date">Data de Conclusão</label>
              <input
                type="date"
                value={conclusion_date}
                onChange={(e) => setConclusionDate(e.target.value)}
              />
           </div>
           <button className="button2">Salvar</button>
      </form>
    </div>
  )
  };
  export default withRouter(UpdateTask)