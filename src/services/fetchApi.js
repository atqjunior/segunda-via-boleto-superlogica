import Swal from 'sweetalert2'

const url = `http://localhost:3000/credencial.superlogica.net/condor/atual/publico/emailcobrancasemaberto?`

const requestOptions = {
  method: 'GET',
  redirect: 'follow'
}

const fetchApi = async (cpf) => {
  try {
    const response = await fetch(url + `cpf=${cpf}`, requestOptions)
    const result = await response.json()
    return result;
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Não foi possível retornar os dados da API',
      footer:
        '<a href="https://api.whatsapp.com/send?phone=5585996513023&text=Estou%20na%20p%C3%A1gina%20de%20solicita%C3%A7%C3%A3o%20de%20boleto%20e%20ocorreu%20um%20erro%20pode%20me%20ajudar%3F">Por que eu tenho esse problema?</a>'
    })
  }
}

export default fetchApi;

    