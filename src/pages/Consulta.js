import React, { useContext } from 'react';
import MyContext from '../contexts/MyContext';
import InputCPF from '../components/inputCPF';
import '../styles/Consulta.css'

const Consulta = () => {
  
  const { cpfData, getCPF, showAlerts } = useContext(MyContext);

  return (
    <main>
      <div className="container">
        <form name="form" method="get">
          { cpfData.msg > '' ? showAlerts() : null} 
          <div className="row mt-4">
            <div className="col-sm-12">
              <h4>Solicite a segunda via do seu boleto online!</h4>
            </div>
            <InputCPF />
            <div className="col-sm-4">
              <button
                className="btn btn-block btn-primary btn-lg fr-buttom mt-4"
                type="button"
                onClick={ getCPF }
              >
                SOLICITAR BOLETO
              </button>
            </div>
          </div>
        </form>
      </div>
    </main>
  )
}

export default Consulta
