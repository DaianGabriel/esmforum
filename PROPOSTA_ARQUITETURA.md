# Proposta de Evolução da Arquitetura do ESM Forum

## Objetivo

A arquitetura atual do ESM Forum atende às necessidades iniciais do projeto. Entretanto, com o crescimento da aplicação, arquivos como `server.js` e `modelo.js` podem acumular muitas responsabilidades.

A proposta é evoluir o backend para uma organização baseada em MVC e em camadas de serviço e persistência.

O fluxo geral proposto é:

`Frontend React -> Controllers -> Services -> Repositories -> SQLite`

## MVC no Backend

### Model

O Model representa os dados e as operações relacionadas às entidades do sistema.

Na arquitetura proposta, essa responsabilidade é apoiada pelos Services e Repositories.

Exemplos:

- `PerguntaService`
- `RespostaService`
- `PerguntaRepository`
- `RespostaRepository`

Os Services concentram regras da aplicação e os Repositories realizam as operações de persistência.

### View

Como o backend funciona como uma API, a View é representada pelas respostas JSON enviadas ao frontend React.

Exemplo:

```json
{
  "id_pergunta": 1,
  "texto": "Quanto é 3 + 3?",
  "num_respostas": 2
}
