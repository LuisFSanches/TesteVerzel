import React from "react";
import { useSelector } from "react-redux";
import icon from "../../assets/images/icon.png";
import { MdAccountCircle } from "react-icons/md";

import "./style.css";

export default function NavBar() {
  const users = useSelector((state) => state.User);
  const user_id = parseFloat(localStorage.getItem('logged_user'))
  return (
    <>
      <div className="nav-dashboard">
        <img src={icon} alt="" />
        <div className="user-data">
          <MdAccountCircle size={28} color="var(--color-background)" />
          {users.map((user)=>{
            if(user.user_id === user_id){
              return(
                <span>{user.name}</span> 
              )   
            }
          })}
        
        </div>
      </div>
    </>
  );
}
