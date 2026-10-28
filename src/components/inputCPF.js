import React, { useContext } from 'react';
import MyContext from '../contexts/MyContext';
import '../styles/Consulta.css';

const InputCPF = () => {
  const { setInputText, inputValue, setInputValue } = useContext(MyContext);

  const handleChange = event => {
    const digitsOnly = event.target.value.replace(/\D/g, '').slice(0, 14);
    setInputText(digitsOnly);
    setInputValue(digitsOnly);
  };

  return (
    <div className="col-sm-8 mt-4">
      <div className="form-group">
        <label className="sr-only" htmlFor="documento-pagador">
          CPF ou CNPJ do pagador
        </label>
        <input
          id="documento-pagador"
          name="documento"
          type="text"
          inputMode="numeric"
          autoComplete="off"
          onChange={handleChange}
          value={inputValue}
          className="form-control fr-input"
          placeholder="CPF/CNPJ do pagador"
          aria-label="CPF ou CNPJ do pagador"
          maxLength={14}
          required
        />
      </div>
    </div>
  );
};

export default InputCPF;
