import React, { useContext } from 'react';
import MyContext from '../contexts/MyContext';
import '../styles/Consulta.css';

const InputCPF = () => {

  const { 
    setInputText, 
    inputValue, 
    setInputValue } = useContext(MyContext);

  const handleChange = event => {
    setInputText(event.target.value)
    setInputValue(event.target.value);
  }

  return (
    <div className="col-sm-8 mt-4">
      <div className="form-group">
        <input
          type="number"
          onChange={ handleChange }
          value={ inputValue }
          className="form-control fr-input"
          placeholder="CPF/CNPJ do pagador"
          required
        />
      </div>
    </div>
  )
}

export default InputCPF;
