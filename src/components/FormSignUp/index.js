import React, {useState,useEffect} from "react";
import { useDispatch,useSelector } from "react-redux";
import {apiZipCode} from '../../services/api.js'
import {MdClose} from 'react-icons/md'
import "./style.css";

export default function FormSignUp() {

const [name, setName] = useState('')
const [email, setEmail] = useState('')
const [birth_date, setBirthDate] = useState('')
const [security_number, setSecurityNumber] = useState('')
const [zipcode, setZipCode] = useState('')
const [city, setCity] = useState('')
const [state, setState] = useState('')
const [address, setAddress] = useState('')
const [number, setNumber] = useState('')
const [password, setPassword] = useState('')
const [error_message, setErrorMessage] = useState('')
const user_id = Math.random()
const users = useSelector((state) => state.User);

const dispatch = useDispatch()


useEffect(()=>{
  async function zipCodeApi(){
    try{
      const response = await apiZipCode.get(`/ws/${zipcode}/json`)
      const zipCodeInfo = response.data
      setCity(zipCodeInfo.localidade)
      setState(zipCodeInfo.uf)
      if(zipCodeInfo.logradouro !== '' ){
        setAddress(zipCodeInfo.logradouro + ', bairro' + zipCodeInfo.bairro)
      }
    } catch(err){
 
    }
  }
 zipCodeApi()
},[zipcode])

const onClick = ()=>{
  console.log(user_id)
}

const birth_date_year = parseFloat(birth_date.split('-')[0])
const current_year = new Date().getFullYear()
const age = (current_year - birth_date_year)

const onSubmit = (e) =>{
  e.preventDefault()
        const newUser = {
          user_id,
          name,
          email,
          birth_date,
          security_number,
          zipcode,
          address,
          number,
          password
        }
        users.map((user)=>{
          if(user.email === email){
            setErrorMessage('Email já cadastrado')
          }
          else{
            if(age > 12){
              dispatch({type:"ADD_USER", user:newUser}) 
            }
            else{
              setErrorMessage('Você precisa ser maior de 12 anos para se cadastrar')
        }   
    }
        })
      }
 return (
    <>
      <div className= {error_message !== '' ? "error_message_activate": "error_message_deactivate"}>
        <p className="error_message">{error_message}</p>
        <button onClick = {()=> setErrorMessage('')}><MdClose size={20} color={"#f6aba2"}/></button>
      </div>
      <form action="submit" onSubmit = {onSubmit}>
        <div className="signup-container">
          <div className="fields">
            <div className="field">
              <label htmlFor="Name">Nome</label>
              <input type="text" required  value={name}
                onChange={(e) => setName(e.target.value)}/>
            </div>
            <div className="field">
              <label htmlFor="Email">Email</label>
              <input type="text" required value={email}
              onChange={(e) => setEmail(e.target.value)}/>
            </div>
          <div className="field-group">
            <div className="field">
              <label htmlFor="Date">Data de Nascimento</label>
              <input type="date" required   value={birth_date}
          onChange={(e) => setBirthDate(e.target.value)}/>
            </div>
            <div className="field" id="smaller">
              <label htmlFor="SecurityNumber">CPF</label>
              <input type="text"  value={security_number}
          onChange={(e) => setSecurityNumber(e.target.value)}/>
            </div>
          </div>
          <div className="field-group">
            <div className="field">
              <label htmlFor="ZipCode">CEP</label>
              <input type="text"   value={zipcode}
              onChange={(e) => setZipCode(e.target.value)}/>
          </div>
            <div className="field">
              <label htmlFor="city">Cidade</label>
              <input type="text" value={city}
              onChange={(e) => setCity(e.target.value)}/>
            </div>
            <div className="field" id="smaller">
              <label htmlFor="state">Estado</label>
              <input type="text" value={state}
              onChange={(e) => setState(e.target.value)}/>
            </div>
          </div>
          <div className="field-group">
            <div className="field">
              <label htmlFor="Adress">Endereço</label>
              <input type="text"   value={address}
          onChange={(e) => setAddress(e.target.value)}/>
            </div>
            <div className="field" id="smaller">
              <label htmlFor="Number">Número</label>
              <input type="text"  value={number}
          onChange={(e) => setNumber(e.target.value)}/>
            </div>
          </div>
          <div className="field">
            <label htmlFor="Password">Password</label>
            <input type="password" required   value={password}
          onChange={(e) => setPassword(e.target.value)}/>
          </div>
        </div>
        <button className="button1" onClick={onClick}>Cadastrar</button>
      </div>
      </form>
    </>
  );
}
