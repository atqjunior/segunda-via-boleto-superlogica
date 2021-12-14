# Central de Solicitações de Boletos!

Este projeto foi inicializado com o [Create React App](https://github.com/facebook/create-react-app).

![GitHub License](https://img.shields.io/github/license/atqjunior/segunda-via-boleto-superlogica?logo=MIT) ![GitHub License](https://img.shields.io/github/package-json/v/atqjunior/segunda-via-boleto-superlogica) [![Netlify Status](https://api.netlify.com/api/v1/badges/4ec4d784-5031-434c-9d92-30e987748680/deploy-status)](https://app.netlify.com/sites/solicitacao-boleto-superlogica/deploys)

# O que é a Central de Solicitação de Boletos?

### Uma aplicação via API integrado ao Superlógica capaz de automatizar solicitações vindas por site, e-mail, PABX e outros...

<br/>

## Benefícios Central de Solicitação de Boletos?

- Entregue aquilo que o condômino precisa de forma mais rápida;
- Reduza o número de ligações que chegam para os atendentes (demanda operacional), realocando o profissional do setor para outras funções;

<br/>

## Descrição do Aplicação:

### Para atender os condôminos que preferem o site para solicitar a 2ª via de boletos, criamos a Central de Solicitação de Boletos, um sistema inteligente que integra as solicitações no site com a demanda operacional, fazendo o envio da 2ª via de boletos de forma automatizada. 

<br/>

```json
CPF que deseja fazer a busca no sistema. Se ele foi cadastrado no sistema com pontos e traços, 
faça a requisição com o valor do parâmetro CPF de acordo como foi cadastrado. Ex: 151.599.502-54 ou 15159950254
```
<br/>

## Funcionalidades:
### Como os usuários podem utilizá-la:

- O condômino entra no site da administradora e clica em 2ª via de boleto;
- Uma página será carregada para a digitação do número de CPF,
- Após digitar o CPF no campo indicado e clicar em SOLICITAR BOLETO, o sistema envia a 2ª via ao condômino por e-mail automaticamente.
- Caso o mesmo não tenho um e-mail cadastrado, será recomendado ligar para administradora para atualização de cadastro.

<br/>

## Respostas para as requisições: 
<br/>

### `Alert Success`

```json
{
  "status": "200",
  "msg": "Sucesso. 3 boletos enviados. Porém existem 2 pendências que fazem parte de processo judicial."
}
```

```json
{
  "status": "200",
  "msg": "Sucesso. 2 boletos enviados."
}
```

### `Alert Warning`

```json 
{ "status": "400", "msg": "Existem unidades que não possuem emails cadastrados, favor verificar." }
```

```json 
{ "status": "404", "msg": "A unidade possui 2 pendências em processo judicial." } 
```
```json 
{ "status": "404", "msg": "Não possui pendências." } 
```

```json 
{ "status": "500", "msg": "Informe cpf, email ou telefone" } 
```

### `Alert Danger`

```json 
{ "status": "0", "msg": "CPF inválido, verifique seus dados e tente novamente." }
```

<hr/><br/>

## Autor do projeto: 
[Amaury Queiroz Jr](https://github.com/atqjunior) 

## Contribuições: 
[Felipe Neves](https://github.com/FelipeNevess) | [Douglas Drozda](https://github.com/DouglasDrozda)
