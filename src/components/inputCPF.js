import React, { useContext } from 'react'
import MyContext from '../contexts/MyContext';
import '../styles/Consulta.css'

function InputCPF(){

  const { setInputText, inputValue, setInputValue } = useContext(MyContext);

  function handleChange(event) {
    setInputText(event.target.value)
    setInputValue(event.target.value);
  }

  return (
    <div className="col-sm-8 mt-4">
      <div className="form-group">
        <input
          type="text"
          onChange={handleChange}
          value={inputValue}
          className="form-control fr-input"
          placeholder="Digite o CPF cadastrado na sua unidade:"
          required
        />
      </div>
    </div>
  )
}

export default InputCPF;
