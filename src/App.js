import React from 'react';
import Provider from './contexts/Provider';
import Consulta from './pages/Consulta';

function App() {
  return (
    <Provider>
      <Consulta />
    </Provider>
  )
}

export default App
