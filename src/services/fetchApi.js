const url = 'https://credencial.superlogica.net/condor/atual/publico/emailceobrancasemaberto';

const fetchApi = async document => {
  const params = new URLSearchParams({ cpf: document });
  const response = await fetch(`${url}?${params.toString()}`, {
    method: 'GET',
    redirect: 'follow',
    headers: {
      Accept: 'application/json'
    }
  });

  if (!response.ok) {
    throw new Error(`A consulta falhou (HTTP ${response.status}).`);
  }

  let result;
  try {
    result = await response.json();
  } catch (error) {
    throw new Error('A API retornou uma resposta inválida.');
  }

  if (!result || !Array.isArray(result.data) || !result.data[0]) {
    throw new Error('A API retornou dados em um formato inesperado.');
  }

  return result;
};

export default fetchApi;
