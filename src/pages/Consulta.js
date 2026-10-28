import React, { useContext } from 'react';
import MyContext from '../contexts/MyContext';
import InputCPF from '../components/inputCPF';
import '../styles/Consulta.css';
import Informes from '../components/informes';

const Consulta = () => {
  const { cpfData, getCPF, showAlerts, isLoading } = useContext(MyContext);

  return (
    <main>
      <div className="container">
        <form name="form" onSubmit={event => event.preventDefault()}>
          <Informes />
          {cpfData && cpfData.msg ? showAlerts() : null}
          <div className="row mt-4">
            <div className="col-sm-12">
              <h4>Dados do Boleto - Segunda Via</h4>
            </div>
            <InputCPF />
            <div className="col-sm-4">
              <button
                className="btn btn-block btn-primary btn-lg fr-buttom mt-4"
                type="button"
                onClick={getCPF}
                disabled={isLoading}
                aria-busy={isLoading}
              >
                {isLoading ? 'CONSULTANDO...' : 'SOLICITAR BOLETO'}
              </button>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Consulta;
