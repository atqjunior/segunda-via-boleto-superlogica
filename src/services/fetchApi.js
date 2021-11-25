import Swal from 'sweetalert2';

const requestOptions = {
  method: 'GET',
  redirect: 'follow'
}

async function fetchApi(cpf) {
  try {
    const response = await fetch(
      `https://cors-anywhere.herokuapp.com/credencial.superlogica.net/condor/atual/publico/emailcobrancasemaberto?cpf=${cpf}`,
      requestOptions
    )
    const data = await response.json()
    return data
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Não foi possível retornar os dados da API!'
    })
  }
}

export default fetchApi
