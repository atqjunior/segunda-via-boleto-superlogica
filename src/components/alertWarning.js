import React, { useContext } from 'react';
import MyContext from '../contexts/MyContext';
import '../styles/Consulta.css';

const AlertWarning = () => {

const { cpfData } = useContext(MyContext);

  return (
    <div className="alert alert-warning" role="alert">
      <p>{cpfData.msg}</p>
    </div>
  )
}

export default AlertWarning;
