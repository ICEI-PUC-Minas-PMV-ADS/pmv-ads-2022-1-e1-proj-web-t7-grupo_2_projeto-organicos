# Arquitetura da Solução

Nesta seção são apresentados os detalhes técnicos da solução criada pela equipe, tratando 
dos componentes que fazem parte da solução e do ambiente de hospedagem da solução.

## Diagrama de componentes

Os componentes que fazem parte da solução são apresentados na Figura XX.

![Diagrama de Componentes](img/componentes.png)
<center>Figura XX - Arquitetura da Solução</center>

A solução implementada conta com os seguintes módulos:
- **Navegador** - Interface básica do sistema  
  - **Páginas Web** - Conjunto de arquivos HTML, CSS, JavaScript e imagens que implementam as funcionalidades do sistema.
   - **Local Storage** - armazenamento mantido no Navegador, onde são implementados bancos de dados baseados em JSON. São eles: 
     - **Perfil** - Resposável por armazenar o perfil registrado. Seja consumidor ou fornecedor. 
     - **Produtos** - Armazena os produtos que foram cadastrados pelo fornecedor. 
     
 - **Produtos API** - Plataforma que facilita o cadastro dos produtos.
 - **Logística API** - Plataforma que permite que o usuário rastreie seu pedido.  
 - **NF API** - Plataforma responsável por emitir a nota fiscal e enviar para o e-mail do cliente.
 - **Marketing API** - Plataforma responsável por emitir a nota fiscal e enviar para o e-mail do cliente.
 - **Hospedagem** - local na Internet onde as páginas são mantidas e acessadas pelo navegador.

 O site utiliza a plataforma Heroku como ambiente de hospedagem do site do projeto. O site é mantido no ambiente da URL. 

https://feira-em-casa.herokuapp.com/  

A publicação do site no Heroku é feita por meio de uma submissão do projeto (push) via git 
para o repositório remoto que se encontra no endereço: 

https://git.heroku.com/feira-em-casa.git
