# Diagrama de Classes - ESM Forum

O diagrama abaixo representa as principais entidades do ESM Forum, considerando a estrutura atual do sistema e as funcionalidades propostas para sua evolução.

```mermaid
classDiagram

class Usuario {
    +int id_usuario
    +string nome
}

class Pergunta {
    +int id_pergunta
    +string texto
    +int id_usuario
    +cadastrar()
    +buscar()
}

class Resposta {
    +int id_resposta
    +int id_pergunta
    +string texto
    +cadastrar()
}

class Tag {
    +int id_tag
    +string nome
}

class Voto {
    +int id_voto
    +int valor
}

Usuario "1" --> "0..*" Pergunta : cria
Usuario "1" --> "0..*" Voto : realiza

Pergunta "1" --> "0..*" Resposta : possui
Pergunta "1" --> "0..*" Voto : recebe

Pergunta "0..*" -- "0..*" Tag : possui
```

## Descrição

- **Usuario:** representa o usuário que participa do fórum.
- **Pergunta:** representa uma pergunta cadastrada e permite operações relacionadas ao cadastro e à busca.
- **Resposta:** representa as respostas associadas às perguntas.
- **Tag:** permite categorizar as perguntas de acordo com seus assuntos.
- **Voto:** representa a avaliação positiva ou negativa realizada por um usuário em uma pergunta.

Os relacionamentos apresentam as multiplicidades entre as entidades, permitindo representar a estrutura necessária para as funcionalidades consideradas nesta etapa do projeto.
