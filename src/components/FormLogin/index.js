import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { MdClose } from "react-icons/md";
import icon_login from "../../assets/images/icon_login.png";

import "./style.css";

function FormLogin({ history }) {
  const users = useSelector((state) => state.User);
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error_message, setErrorMessage] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (users.length !== 0) {
      users.map((user) => {
        if (user.email === email && user.password === password) {
          const _id = user.user_id;
          localStorage.setItem("logged_user", _id);
          localStorage.setItem("isAuth", true);
          history.push("/dashboard");
        } else {
          setErrorMessage(...error_message, "Email ou senha incorretos");
        }
      });
    } else {
      setErrorMessage(...error_message, "Email ou senha incorretos");
    }
  };

  return (
    <>
      <div className="login-container">
        <div className="image-title">
          <Link to="/">
            <img src={icon_login} alt="" />
          </Link>

          <h2>Faça Login</h2>
        </div>

        <div
          className={
            error_message !== ""
              ? "error_message_activate"
              : "error_message_deactivate"
          }
        >
          <p className="error_message">{error_message}</p>
          <button onClick={() => setErrorMessage("")}>
            <MdClose size={20} color={"#f6aba2"} />
          </button>
        </div>

        <div className="fields-form">
          <form action="" onSubmit={onSubmit}>
            <div className="field">
              <label htmlFor="Email">Email</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="field">
              <div className="password">
                <label htmlFor="Password">Password</label>
                <Link className="link" to="/">
                  Esqueceu sua senha?
                </Link>
              </div>

              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button className="button2">Logar</button>
          </form>
        </div>

        <div className="create-account">
          <p>Não possui conta?</p>
          <Link to="/" className="link">
            Criar uma conta
          </Link>
        </div>
      </div>
    </>
  );
}
export default withRouter(FormLogin);
