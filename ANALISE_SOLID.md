# Análise dos Princípios SOLID no ESM Forum

## Introdução

O ESM Forum possui uma estrutura simples, composta principalmente pelo arquivo `server.js`, responsável pela API HTTP, pelo arquivo `modelo.js`, que concentra as operações relacionadas às perguntas e respostas, e pelo módulo `bd/bd_utils.js`, responsável pelo acesso ao banco de dados SQLite.

A seguir são apresentados pontos positivos da estrutura atual e oportunidades de melhoria considerando os princípios SOLID.

## Pontos positivos

### 1. Separação entre API e regras da aplicação - SRP

O arquivo `server.js` é responsável principalmente por receber as requisições HTTP e retornar as respostas aos clientes.

As operações relacionadas às perguntas e respostas são delegadas ao módulo `modelo.js`.

Por exemplo, ao receber uma requisição para cadastrar uma pergunta, o servidor utiliza:

`modelo.cadastrar_pergunta(req.body.pergunta)`

Essa separação contribui para o Princípio da Responsabilidade Única (SRP), pois evita que toda a lógica da aplicação seja implementada diretamente nas rotas HTTP.

### 2. Isolamento do acesso ao banco de dados - SRP

O arquivo `bd/bd_utils.js` concentra as operações utilizadas para comunicação com o banco SQLite por meio das funções:

- `query()`
- `queryAll()`
- `exec()`

Dessa forma, `modelo.js` não precisa manipular diretamente a biblioteca `better-sqlite3`.

Essa organização reduz o acoplamento com detalhes de acesso ao banco e mantém a responsabilidade de comunicação com o SQLite concentrada em um módulo específico.

### 3. Possibilidade de substituição da dependência do banco - DIP

O arquivo `modelo.js` possui a função `reconfig_bd(mock_bd)`.

Essa função permite substituir o módulo de banco de dados por uma implementação simulada durante os testes.

Essa característica aproxima o projeto do Princípio da Inversão de Dependência (DIP), pois permite que a lógica do modelo seja executada utilizando outra implementação para o acesso aos dados.

Além disso, essa estratégia facilita a criação de testes unitários sem depender diretamente do banco SQLite real.

## Oportunidades de melhoria

### 1. `modelo.js` possui diferentes responsabilidades - SRP

Atualmente, `modelo.js` contém operações relacionadas a diferentes conceitos do sistema, como:

- perguntas;
- respostas;
- contagem de respostas;
- comandos SQL;
- configuração da dependência do banco.

Com a evolução do ESM Forum e a inclusão de novas funcionalidades, como busca, tags e votação, esse arquivo pode crescer e passar a concentrar responsabilidades demais.

Uma melhoria seria dividir essas responsabilidades em módulos ou serviços menores, por exemplo:

- serviço de perguntas;
- serviço de respostas;
- repositório responsável pelo acesso aos dados.

Essa separação facilitaria a manutenção e os testes.

### 2. Dependência direta entre rotas e `modelo.js` - DIP e OCP

O arquivo `server.js` importa diretamente:

`const modelo = require('./modelo.js');`

As rotas dependem, portanto, diretamente de uma implementação concreta do modelo.

Com o crescimento da aplicação, novas funcionalidades exigiriam novas alterações nesses arquivos, aumentando o acoplamento.

Uma possibilidade de melhoria seria introduzir serviços ou abstrações intermediárias. As rotas poderiam depender desses serviços, enquanto os detalhes de acesso aos dados ficariam isolados em repositórios.

Essa estrutura facilitaria a substituição de implementações e permitiria ampliar o sistema com menor impacto no código existente, contribuindo também para o Princípio Aberto/Fechado (OCP).

## Exemplos de código analisados

### Exemplo positivo 1 - SRP

No `server.js`, a rota delega a operação ao modelo:

```javascript
const perguntas = modelo.listar_perguntas();
res.send(perguntas);

## Conclusão

O ESM Forum já apresenta uma separação básica entre a API, a lógica da aplicação e o acesso ao banco de dados.

Entretanto, a evolução do sistema pode aumentar a quantidade de responsabilidades concentradas em `modelo.js` e o acoplamento entre os componentes.

A aplicação dos princípios SRP, DIP e OCP pode tornar a estrutura mais modular, facilitar os testes e permitir que novas funcionalidades sejam adicionadas com menor impacto no código existente.
