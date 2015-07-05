# Teste de Conhecimento - Analista Desenvolvedor #
Autor: Andre Almeida

## Questão 1 ##
Para a questão 1 foi criado um script em questao1/questao1.php que resolve o problema proposto utilizando as estruturas de controle for e if.

## Questão 2 ##
O código refatorado está em questão2/questao2.php.
O problema que foi resolvido foi a repetição de lógica, pois o redirect estava definido em dois lugares.

## Questão 3 ##
O código refatorado está em questão3/questao3.php.
No código da questão 3 o problema resolvido foi a questão do objeto da conexão com o banco de dados que a cada vez que o método era chamado era preciso instanciar novamente o objeto.
Para resolver o problema foi criado um atributo na classe que permite que o objeto de conexão possa ser setado reaproveitando um objeto instanciado fora da classe. Caso não tenha sido setado nenhum objeto de conexão a classe instancia o objeto mas seta ao atributo o objeto para uso posterior.

## Questão 4 ##
Foi desenvolvido uma API Rest utilizando o cakePHP com as seguintes funções:
 * index - Lista todas as tarefas
 * view - Retorna os dados de uma tarefa
 * add - Adiciona uma tarefa ao banco de dados
 * edit - Edita os dados de uma tarefa
 * delete - Exclui uma tarefa do banco de dados
 * salvarLote - Permite salvar várias tarefas de uma vez

Foi desenvolvido também uma interface para gerenciar as tarefas através de um cliente desenvolvido com AngularJS.

# Instalação #
* Para a instalação do sistema da questão 4, sera necessário criar um banco de dados MySQL.
* Criar uma tabela cujo SQL para criação segue abaixo:
```
#!sql
CREATE TABLE IF NOT EXISTS `tarefas` (
`id` int(11) NOT NULL,
  `titulo` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `descricao` text COLLATE utf8_unicode_ci NOT NULL,
  `prioridade` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

```
* Configurar o arquivo de configuração do banco de dados do cakePHP: questao4/servidor/app/Config/database.php
* Acessar o cliente em "questao4/cliente"
* Caso o cliente e servirdor não estejam no mesmo local no servidor será necessário alterar o valor da variável pathServidor em questao4/cliente/js/controllers.js


# Principais arquivos para avaliação #
## Rest API ##
* questao4/servidor/app/Controller/TarefasController.php
## Cliente API ##
* questao4/cliente/js/controllers.js
