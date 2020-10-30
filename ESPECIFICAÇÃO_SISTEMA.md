
# Trabalho 2 – Laboratório de Engenharia de Software I

# Especificação de Requisitos do Software

 
## Especificação de Requisitos do Software

### Especificação do Software
<<<<<<< HEAD
#### ASJ Gym
=======
# 1.Introducao
### 1.1 Objetivos deste documento
O documento em questão tem por finalidade apresentar um sistema para uma academia.Com o intuito de facilitar e otimizar o ecosistema da academia.
### 1.2 Escopo do produto
#### 1.2.1	Nome do produto e de seus componentes principais


#### 1.2.2	Missao do Produto
A missão do produto é agilizar e facilitar a interação do cliente com a academia. Permitindo que os clientes tenham acesso a informação de forma fácil e com que os profissionais possam adcionar informações do cliente de forma prática. 


#### 1.2.3.	Relação de Requisitos Funcionais

Número   | Descrição
--------- | ------
REQ-01 | O sistema  deverá  permitir o cadastro de funcionarios e alunos.
REQ-02 | O sistema deve permitir que o usuário veja somente aquilo que ele tem permissão.
REQ-03 | O sistema deve permitir que a secretaria cadastre os dados pessoais do cliente. (nome  completo,  CPF,  identidade  e  data  de  nascimento)
REQ-04 | O sistema deve permitir que a secretaria cadastre os dados do cartão do cliente. (número  do  cartão e nome do dono, )
REQ-05 | O sistema deve permitir que a secretaria selecione a modalidade e o tipo de plano do cliente. (mensal,   semestral   ou   anual)
REQ-06 | O sistema deverá verificar a disponibilidade do dia e horário, de  acordo  com  a  modalidade  pretendida  do  cliente
REQ-07 | O sistema deve permitir que o professor cadastre  o treino de  cada  aluno
REQ-08 | O sistema deve exibir o treino e o exame de aptidão física para cada aluno quando este acessar a aplicação.
REQ-09 | O sistema deve permitir que o médico cadastre o exame de aptidão física de um aluno. (peso, altura,  pressão  arterial,  percentual  de  gordura  no corpo,  percentual  de  massa  magra,  IMC e  situação  do  paciente)
REQ-10 | O sistema deve permitir que o professor peça outro exame de aptidão do aluno para avaliar a sua melhora.
REQ-11 | O Sistema deve permitir que o administrador possa cadastrar novas turmas se necessário.
 


#### 1.2.4.	Relação de Regras de Negócio
Número   | Descrição
--------- | ------
RN-01 | **Modalidades oferecidas:**  A academia deve oferecer ao aluno as modalidades de musculação,   natação, crossfit, ritmos  e spinning.
Rn-02 | **Planos:**  Um plano pode ser mensal, semestral ou anual.
Rn-03 | **Funcionamento:**  A academia deve funcionar de segunda a sexta das 06:30 às 20:00,(sábado e domingo em alguns horários para turmas de musculação).
Rn-04 | **Musculação:**  A modalidade de musculação é a única que pode ser feita em qualquer horário e dia, e em todos os dias da semana, as demais deve-se seguir o quadro de horários.
Rn-05 | **Função professor:**  O professor é responsável por dar aulas e elaborar treinos    individualizados para a musculação.
Rn-06 | **Exame de aptidão:**  O exame de aptidão deve conter ausculta cardiorrespiratória, aferição da pressão arterial e anamnese (questionário e entrevista) dirigida para a atividade física que pretende praticar. E também os números do IMC do cliente.

#### 1.2.6.	Requisitos de Usabilidade
Número  |	Descrição
--------- | ------
RU-01| O cliente/funcionário deverá possuir um dispositvo (celular/computador) que garanta a boa usabilidade do sistema.

#### 1.2.7.	Requisitos de Desempenho
Número  |	Descrição
--------- | ------
RD-01	| O APP deverá funcionar nas seguintes plataformas: Web (com acesso em todos os dispositivos)
RD-02	| Para acessar o Sistema, o cliente/funcionário deverá estar autenticado e ter acesso à internet.


#### 1.2.8.	Benefícios do produto

Número |	Benefício |	Valor para o cliente
--------- | ------ | ------
1| 		Rapidez no atendimento| O cliente, caso escolha utilizar o aplicativo, não precisa ficar esperando que o professor precise dizer qual o próximo aparelho a ser feito.	 
2	| 	Preservação do meio ambiente | Tanto o cliente quanto a empresa contratante estarão contribuindo para o meio ambiente, pois o aplicativo reduzirá os gastos de papéis em fichas médicas e de treinos
3	|  Patricidade	| O cliente terá todas informações que precisa de forma fácil.
4 | Usabilidade | O aplicativo promove rapidez e fácil entendimento em todas as funções, seja dos servidores quanto dos clientes.

### 2 Descrição geral do produto

### 2.1 Perspectiva do produto

## 2.1.1	Lista dos Atores
Nome | 	Descrição
--------- | ------ 
Secretaria| 		Funcionário que estará na entrada da Academia para receber alunos e retirar todas dúvidas, dar boas vindas, apresentar a academia, cadastrar o cliente e matricular o aluno. 
Administrador	| Responsável por cadastrar e criar perfil para novos funcionários e ser o segundo responsável por assumir o papel da secretária se necessário. Além de ser responsável pela manutenção do sitema como um todo e adicionar novas turmas se necessário. 
Professor	|  Responsavel por ministrar aulas em grupos : CrossFit,Natacao ,Spinning e Ritmos e responsável por criar ficha de musculação e avaliar a aptidão do aluno.
Aluno	|  Cliente da academia, e motivo de tudo existir, terá acesso a sua ficha e seu plano. xD.	
Sistema	|  Responsável por tudo que ocorre no sistema.

## 2.1.2	Diagrama de Caso de Uso

![alt text](https://github.com/Samuel1s/Gym/blob/master/Imagens_Esp_Sistema/Caso%20de%20Uso-Gym-correto.jpeg)
## 2.1.3	Diagrama de Caso de Uso
Código  |	Nome
--------- | ------ 
CSU-001	| Cadastrar dados dos servidores.
CSU-002	| Criar perfil para os servidores.
CSU-003	| Criar o perfil informando o email já cadastrado.
CSU-004 | Cadastrar dados do usuário.
CSU-005 | Validar os exames dos usuários.
CSU-006	| Matricular Usuários
CSU-007 | Selecionar planos e turmas.
CSU-008 | Visualizar exames pendentes.
CSU-009	| Visualizar exame médico do Matriculado.
CSU-0010 | Definir treino de musculação.
CSU-0011 | Solicitar novo exame de aptidão física.
CSU-0012 | Criar novas turmas e selecionar professores.
CSU-0013 | Definir IMC.