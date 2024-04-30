// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";

const Card = (formResults) => {
  const results = () => {
    console.log(formResults)
    console.log(formResults.formResults.img_url)
  }
  results()

  return (
    <section>
      <img src={formResults.formResults.img_url} width={200} alt={formResults.formResults.name} />
      <p>Nombre: {formResults.formResults.name}</p>
      <p>Email: {formResults.formResults.email}</p>
      <p>Edad: {formResults.formResults.age}</p>
    </section>
  );
};


export default Card;