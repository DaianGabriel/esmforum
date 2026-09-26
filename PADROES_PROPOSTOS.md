# Padrões de Projeto Propostos para o ESM Forum

## Introdução

Para apoiar a evolução do ESM Forum foram selecionados três padrões de projeto: Strategy, Observer e Factory. Eles foram escolhidos por estarem relacionados a funcionalidades previstas para o sistema, como busca, votação, notificações e criação de diferentes componentes.

## 1. Strategy

### Contexto e justificativa

O ESM Forum pode possuir diferentes formas de buscar ou ordenar perguntas, como por relevância, número de respostas ou quantidade de votos.

O padrão Strategy permite encapsular cada algoritmo em uma estratégia independente.

### Solução proposta

Seria criada uma interface conceitual `EstrategiaBusca`, implementada por diferentes estratégias.

Exemplos:

- `BuscaPorPalavraChave`
- `BuscaPorVotos`
- `BuscaPorRespostas`

O `PerguntaService` recebe a estratégia escolhida e a utiliza para realizar a busca.

### Interação

O Controller solicita a busca ao `PerguntaService`. O serviço utiliza uma implementação de `EstrategiaBusca`, que consulta o `PerguntaRepository`.

### Exemplo de pseudocódigo

```text
class BuscaPorPalavraChave {
    buscar(termo) {
        return repository.buscarPorPalavraChave(termo)
    }
}

class PerguntaService {
    buscar(estrategia, termo) {
        return estrategia.buscar(termo)
    }
}
