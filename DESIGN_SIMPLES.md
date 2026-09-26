\# Design Simples - ESM Forum



\## Introdução



O ESM Forum é uma aplicação didática de pequeno porte, desenvolvida para demonstrar conceitos de Engenharia de Software. Por esse motivo, o projeto possui uma estrutura simples, com poucas responsabilidades e funcionalidades bem definidas.



Nesta versão do projeto, as rotas relacionadas às perguntas e respostas estão concentradas no arquivo `server.js`, enquanto as operações relacionadas aos dados estão no arquivo `modelo.js`.



O enunciado da atividade menciona os arquivos `routes/perguntas.js` e `routes/respostas.js`. Entretanto, esses arquivos não estão presentes na versão do repositório utilizada neste projeto. Assim, a análise foi realizada sobre `server.js` e `modelo.js`, que contêm as responsabilidades correspondentes.



\## Análise do Design Simples



O código atual segue uma organização simples. O arquivo `server.js` recebe as requisições HTTP, define as rotas da aplicação e utiliza as funções disponíveis no `modelo.js`.



O arquivo `modelo.js`, por sua vez, concentra as operações relacionadas às perguntas e respostas armazenadas no banco de dados, como:



\- listar perguntas;

\- cadastrar perguntas;

\- cadastrar respostas;

\- consultar uma pergunta;

\- consultar as respostas de uma pergunta;

\- contar o número de respostas.



Essa separação facilita a compreensão do código, pois o servidor não precisa conhecer os detalhes das consultas SQL utilizadas para acessar o banco de dados.



\## Exemplos de simplicidade encontrados



Um exemplo de Design Simples pode ser observado na rota de cadastro de perguntas. O `server.js` recebe o texto da pergunta e chama diretamente a função `cadastrar\_pergunta()` do modelo. Não existem camadas adicionais sem necessidade para essa operação.



Outro exemplo está na função `get\_respostas()` do `modelo.js`. A função realiza apenas a consulta necessária para obter as respostas relacionadas a uma pergunta e retorna o resultado. Essa implementação é pequena e possui uma responsabilidade clara.



Também é possível observar simplicidade na estrutura geral do backend. Como o sistema possui poucas funcionalidades, as rotas foram mantidas em um único arquivo, evitando uma divisão excessiva do código neste momento.



\## YAGNI



O princípio YAGNI (You Aren't Gonna Need It) recomenda que funcionalidades sejam implementadas somente quando forem realmente necessárias.



O ESM Forum apresenta exemplos desse princípio porque não implementa antecipadamente recursos mais complexos que ainda não são necessários para os objetivos atuais do sistema.



Por exemplo, não existe uma estrutura complexa de serviços ou diversas camadas intermediárias entre as rotas e o modelo. Para o tamanho atual da aplicação, criar essas estruturas aumentaria a complexidade sem oferecer um benefício imediato.



Da mesma forma, separar cada conjunto de rotas em diversos arquivos poderia ser útil caso o sistema crescesse significativamente. Entretanto, na versão atual, manter poucas rotas em `server.js` é uma solução simples e suficiente.



\## Oportunidades de simplificação e melhoria



Apesar de o código ser simples, algumas melhorias podem ser realizadas sem aumentar desnecessariamente sua complexidade.



Uma possibilidade seria padronizar o tratamento de erros das rotas. Atualmente, várias rotas possuem blocos `try/catch` semelhantes. Caso o sistema cresça, esse tratamento poderia ser centralizado para reduzir repetição.



Na rota `GET /respostas/:id\_pergunta`, as chamadas para `modelo.get\_pergunta()` e `modelo.get\_respostas()` são realizadas antes do bloco `try`. Uma melhoria simples seria colocá-las dentro do bloco, permitindo que possíveis erros dessas operações também sejam tratados.



Também seria possível melhorar a validação dos dados recebidos nas requisições, verificando, por exemplo, se o texto de uma pergunta ou resposta foi realmente informado antes de realizar o cadastro.



Essas alterações devem ser realizadas conforme a necessidade do sistema, evitando criar estruturas complexas antecipadamente.



\## Conclusão



O ESM Forum apresenta um design adequado ao seu objetivo didático e ao tamanho atual da aplicação. O código possui poucas camadas, funções pequenas e responsabilidades relativamente bem definidas.



A aplicação dos princípios de Design Simples e YAGNI ajuda a manter o projeto compreensível e evita a criação de funcionalidades ou abstrações que ainda não são necessárias. Melhorias futuras podem ser realizadas gradualmente conforme novos requisitos forem adicionados ao sistema.

