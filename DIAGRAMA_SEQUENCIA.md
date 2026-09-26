# Diagrama de Sequência - Busca de perguntas

Este diagrama representa a interação entre os componentes do ESM Forum durante a busca de perguntas por palavra-chave.

```mermaid
sequenceDiagram
    actor U as Usuário
    participant V as Frontend React
    participant C as Controlador
    participant M as Modelo
    participant BD as Banco de Dados

    U->>V: Informa palavra-chave
    U->>V: Solicita busca
    V->>C: Envia termo de busca
    C->>M: buscar_perguntas(termo)
    M->>BD: Consulta perguntas pelo termo
    BD-->>M: Retorna perguntas encontradas
    M-->>C: Retorna lista de perguntas
    C-->>V: Retorna resultados
    V-->>U: Exibe perguntas encontradas

    alt Nenhuma pergunta encontrada
        V-->>U: Informa que não há resultados
    end
```

## Descrição

O usuário informa uma palavra-chave na interface do ESM Forum. O frontend envia o termo ao controlador, que solicita ao modelo a realização da busca.

O modelo consulta o banco de dados e retorna as perguntas correspondentes. O resultado percorre novamente as camadas da aplicação até ser apresentado ao usuário.

Caso nenhuma pergunta corresponda ao termo pesquisado, a interface informa que não foram encontrados resultados.
