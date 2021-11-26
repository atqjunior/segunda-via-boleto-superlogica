import React, { useContext } from 'react';
import MyContext from '../contexts/MyContext';

import '../styles/Consulta.css';

const AlertSuccess = () => {
  const { cpfData } = useContext(MyContext);
 
  return (
    <div className="alert alert-success" role="alert">
      <p>{ cpfData.msg } para o e-mail cadastrado na Área do Condômino! </p>
    </div>
  )
}

export default AlertSuccess;
