import React from 'react'
import AddTask from '../../components/AddTask'
import NavBar from "../../components/NavBarDashboard/";
import TaskList from "../../components/TaskList/";
import './style.css'
export default function Dashboard() {
  return (
    <div className="dashboard-container">
      <NavBar/>
      <AddTask/>
      <TaskList/>
    </div>
  )
}
