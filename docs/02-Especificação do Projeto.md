# Especificações do Projeto

O problema geral e os pontos relevantes trabalhados nesse projeto foram consolidados com base em pesquisas realizadas por associações envolvidas com o setor de orgânicos. Entraves e considerações de consumidores levantados nesse processo de pesquisa bibliográfica foram consolidados em personas e histórias de usuários.

## Personas

Baseadas em dados sobre comportamentos e características dos clientes, as personas são representações fictícias do público-alvo de um negócio. Assim, são personagens criados para simular um cliente ideal.[8]

![MARINA](https://user-images.githubusercontent.com/100173177/163076031-b4b31c69-eefa-4201-8a1d-887f54b18379.png)

![MILENA](https://user-images.githubusercontent.com/100173177/163076057-24bfbf78-0591-42a3-92bb-25c19950f372.png)

![HUGO](https://user-images.githubusercontent.com/100173177/163076064-45c78930-e31f-4326-b021-7f80019c4cc4.png)

![BIANCA](https://user-images.githubusercontent.com/100173177/163076069-d2d43410-16d1-4624-8d9a-1a3f7d5b7cc9.png)

![CLAUDIA](https://user-images.githubusercontent.com/100173177/163076075-79ad131f-037c-49b0-a309-06af50410e38.png)


## Histórias de Usuários

Uma história de usuário é a descrição geral de um recurso de software escrita a partir da perspectiva do usuário final. Para articular como um recurso gerará valor para o cliente, ela deve ser curta e objetiva, explicando do ponto de vista do usuário o que ele deseja e por que.[9,10]

|EU COMO... `PERSONA`     | QUERO/PRECISO ... `FUNCIONALIDADE`                                  |PARA ... `MOTIVO/VALOR`                                    |
|-------------------------|---------------------------------------------------------------------|-----------------------------------------------------------|
|Hugo Almeida [consumidor]| um serviço de assinatura de produtos orgânicos                      | receber tudo que quero periodicamente com mais comodidade.|
|Hugo Almeida [consumidor]| encontrar produtos orgânicos com valores mais acessíveis            | consumi-los com maior frequência e quantidade.            |
|Hugo Almeida [consumidor]| saber o local e horário que produtores estarão na minha região      | poupar tempo na busca dos produtos de melhor qualidade, quando quiser compra-los presencialmente.|
|Hugo Almeida [consumidor]| descobrir produtos de melhor qualidade nutritiva                    | adequar meus hábitos a um estilo de vida saudável.        |
|Hugo Almeida [consumidor]| estímulos ao consumo de produtos orgânicos                          | incentivar familiares e amigos a mudar hábitos.           |
|Hugo Almeida [consumidor]| comprar produtos orgânicos online                                   | recebê-los frescos no conforto da minha casa.             |
|Hugo Almeida [consumidor]| um clube de fidelidade para quem consome orgânicos de forma regular | economizar nas compras regulares.                         |
|Marina Borges [produtora]| bons locais para oferecer meus produtos                             | melhor alocar meus pontos de venda.                       |
|Marina Borges [produtora]| anunciar meus produtos em um e-commerce confiável                   | aumentar minhas vendas e cartela de clientes.             |
|Marina Borges [produtora]| aproximar-me de meus clientes e alcançar novos                      | garantir um atendimento personalizado e incentivá-los a comprar de forma regular.|

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito                                                                                  | Prioridade |
|------|---------------------------------------------------------------------------------------------------------|------------|
|RF-001| O site deverá oferecer assinaturas com seleção de produtos e a periodicidade de entrega.                | Alta       | 
|RF-002| O site deverá oferecer um mapeamento de produtores, horários e locais de vendas.                        | Alta       |
|RF-003| O site deverá permitir o salvamento e manejo de fornecedores e produtos.                                | Alta       |
|RF-004| O site deverá oferecer a funcionalidade de pesquisa com filtro.                                         | Baixa      |
|RF-005| O site deverá permitir o cadastro de fornecedores e usuários, bem como manter os perfis de usuário.     | Alta       |
|RF-006| O site deverá oferecer um sistema de comunicação entre consumidor e produtor.                           | Média      |
|RF-007| O site deverá conter um sistema de pagamento integrado.                                                 | Média      |
|RF-008| O site deverá conter um sistema de avaliação de fornecedores com termômetro de confiabilidade.          | Alta       |
|RF-009| O site deverá conter um blog interativo para publicidade e incentivo ao consumo de orgânicos.           | Baixa      |
|RF-010| O site deverá conter uma área de suporte ao cliente.                                                    | Média      |
|RF-011| O site deverá permitir o cadastro de promoções para os produtos obtidos, aplicando automaticamente o percentual de desconto vinculando ao cadastro do produto. | Média |
|RF-012| O site deverá permitir que o usuário possa alterar os dados do seu cadastro.                            | Média      |
|RF-013| O site deverá permitir que se verifique quais vendas foram realizadas e qual o status de seu pagamento. | Alta       |
|RF-014| O site deverá informar quando o produto for enviado ao cliente.                                         | Baixa      |


### Requisitos não Funcionais

|ID     | Descrição do Requisito                                                                  |Prioridade |
|-------|-----------------------------------------------------------------------------------------|-----------|
|RNF-001| O site deverá ser publicado em um ambiente público e acessível na Internet.             | Média     | 
|RNF-002| O site deverá ser responsivo.                                                           | Alta      | 
|RNF-003| O site deverá ser compatível com os principais navegadores.                             | Baixa     |
|RNF-004| O site deverá conter um sistema de segurança e criptografia de informações dos usuários.| Alta      | 


## Restrições

|ID    | Restrição                                                      |
|------|----------------------------------------------------------------|
|RE-001| A solução deverá ser implementada e apresentada até 12/06/2022.|
|RE-002| O sistema deverá ser desenvolvido em JavaScript, HTML e CSS.   |
|RE-003| O desenvolvimento do trabalho não pode ser subcontratado.      |

