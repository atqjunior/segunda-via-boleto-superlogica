import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from '../contexts/MyContext';
import AlertDanger from '../components/alertDanger';
import AlertWarning from '../components/alertWarning';
import AlertSuccess from '../components/alertSuccess';
import fetchApi from '../services/fetchApi';

const Provider = ({ children }) => {
  const [cpfData, setCpfData] = useState([]);
  const [inputText, setInputText] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const getCPF = async () => {
    if (isLoading) return;

    const document = String(inputText || '').replace(/\D/g, '');

    if (document.length !== 11 && document.length !== 14) {
      setCpfData({
        status: '0',
        msg: 'Informe um CPF com 11 dígitos ou um CNPJ com 14 dígitos.'
      });
      return;
    }

    setIsLoading(true);
    setCpfData([]);

    try {
      const result = await fetchApi(document);
      setCpfData(result.data[0]);
      setInputText('');
      setInputValue('');
    } catch (error) {
      setCpfData({
        status: 'error',
        msg: 'Não foi possível consultar a API agora. Tente novamente em instantes.'
      });
    } finally {
      setIsLoading(false);
    }
  };

  const showAlerts = () => {
    const status = String(cpfData?.status ?? '');

    if (status === '200') {
      return <AlertSuccess />;
    }

    if (status === '0' || status === '500' || status === 'error') {
      return <AlertDanger />;
    }

    if (status && status !== '200') {
      return <AlertWarning />;
    }

    return null;
  };

  return (
    <MyContext.Provider
      value={{
        cpfData,
        getCPF,
        setInputText,
        inputText,
        showAlerts,
        inputValue,
        setInputValue,
        isLoading
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired
};

export default Provider;
