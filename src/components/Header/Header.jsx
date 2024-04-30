// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";

const Header = () =>  {
  const { email } = useContext(UserContext)
  return <div>Bienvenido {email}</div>;
};
export default Header;
