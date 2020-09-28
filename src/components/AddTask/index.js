import React, { useState } from "react";
import { useDispatch } from "react-redux";

import "./style.css";

export default function AddTask() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [delivery_date, setDeliveryDate] = useState("");
  const [conclusion_date, setConclusionDate] = useState("");

  const user_id = localStorage.getItem("logged_user");
  console.log(user_id);

  const id = Math.random();

  const onSubmit = (e) => {
    e.preventDefault();
    const newFormatDateDelivery = delivery_date.split("-").reverse().join("-");
    const newFormatDateConclusion = conclusion_date
      .split("-")
      .reverse()
      .join("-");
    const newTask = {
      id,
      user_id,
      name,
      delivery_date: newFormatDateDelivery,
      conclusion_date: newFormatDateConclusion,
      done: false,
    };
    dispatch({ type: "ADD_TASK", newtask: newTask });
  };

  return (
    <div className="newtask-container">
      <form action="" onSubmit={onSubmit}>
        <div className="input-data">
          <div className="field-task">
            <label htmlFor="">Tarefa</label>
            <input
              type="text"
              required
              placeholder="Nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="field-task">
            <label htmlFor="">Data de Entrega</label>
            <input
              type="date"
              required
              placeholder="dd-mm-yyyy"
              value={delivery_date}
              onChange={(e) => setDeliveryDate(e.target.value)}
            />
          </div>
          <div className="field-task">
            <label htmlFor="">Data de Conclusão</label>
            <input
              type="date"
              placeholder="Data Conclusão"
              value={conclusion_date}
              onChange={(e) => setConclusionDate(e.target.value)}
            />
          </div>
        </div>
        <button className="button2">Nova Tarefa</button>
      </form>
    </div>
  );
}
