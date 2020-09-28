import React from "react";
import FormSignUp from "../../components/FormSignUp";
import NavBar from "../../components/NavBarHome/";
import "./style.css";
export default function Home() {
  return (
    <>
      <NavBar />
      <div className="home-container">
        <div className="description">
          <h1>
            Cadastro de <br /> Tarefas
          </h1>
          <p>
            Evite o desconforto de esquecer compromissos importantes. Somos a
            plataforma ideal para te ajudar a gerenciar suas tarefas do dia a
            dia, junte-se a nós.
          </p>
        </div>
        <div className="form">
          <FormSignUp />
        </div>
      </div>
    </>
  );
}
