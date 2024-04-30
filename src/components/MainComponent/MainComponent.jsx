// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Form from './Form';
import Card from './Card'

// eslint-disable-next-line react/prop-types
const MainComponent = ({setEmail}) => {
  const [formResults, setFormResults] = useState({
    name: "",
    email: "",
    img_url: "",
    age: "",
  });

  return <section>
    <Form setFormResults={setFormResults} setEmail={setEmail}/>
    <Card formResults={formResults}/>
  </section>
};


export default MainComponent;
