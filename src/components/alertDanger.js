import React, { useContext } from 'react';
import MyContext from '../contexts/MyContext';
import '../styles/Consulta.css';

const AlertDanger = () => {

  const { cpfData } = useContext(MyContext);

  return (
    <div className="alert alert-danger" role="alert">
      <p>{ cpfData.msg }, verifique seus dados e tente novamente.</p>
    </div>
  )
}

export default AlertDanger;
