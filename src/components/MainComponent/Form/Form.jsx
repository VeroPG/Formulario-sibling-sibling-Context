// eslint-disable-next-line no-unused-vars
import React, { useState, useContext } from "react";
import { UserContext } from '../../../context/UserContext'
import './Form.css'

// eslint-disable-next-line react/prop-types
const Form = ({setFormResults}) => {
  const { setEmail } = useContext(UserContext)

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value
    const email = e.target.email.value
    const img_url = e.target.img_url.value
    const age = e.target.age.value

    console.log(name, email, img_url, age)

    const item = {name, email, img_url, age}
    console.log(item)

    setFormResults(item)
    setEmail(email)
  }

  return <form onSubmit={handleSubmit}>
    <label htmlFor="">Nombre </label>
    <input type="text" name="name" />
    <label htmlFor="">Email </label>
    <input type="email" name="email" />
    <label htmlFor="">Url foto </label>
    <input type="text" name="img_url" />
    <label htmlFor="">Edad </label>
    <input type="number" name="age" />
    <button type="submit">Enviar</button>
  </form>
};


export default Form;