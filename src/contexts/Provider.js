import React, { useState } from 'react'
import PropTypes from 'prop-types'
import MyContext from '../contexts/MyContext'
import AlertDanger from '../components/alertDanger'
import AlertWarning from '../components/alertWarning'
import AlertSuccess from '../components/alertSuccess'
import fetchApi from '../services/fetchApi'

function Provider({ children }) {
  const [cpfData, setCpfData] = useState([])
  const [inputText, setInputText] = useState('')
  const [inputValue, setInputValue] = useState('')  

  async function getCPF() {
    const results = await fetchApi(inputText)
    setCpfData(results.data[0])
    //console.table(results.data[0])
    setInputValue('')
  }

  const showAlerts = () => {
    if (cpfData.status === '200') {
      return <AlertSuccess />
    } else if (cpfData.status > '0' && cpfData.status !== '200') {
      return <AlertWarning />
    } else if (cpfData.status === '0') {
      return <AlertDanger />
    }
  }

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
      }}
    >
      {children}
    </MyContext.Provider>
  )
}

Provider.propTypes = {
  children: PropTypes.node.isRequired
}

export default Provider
