Descrição:
Diante do cenário atual, existe uma demanda gigante de pessoas para tomar a vacina para o COVID-19. E com isso nossa cidade está precisando de um simples sistema para realizar os agendamentos. O processo consiste na criação de um portal onde será possível agendar pacientes para tomar a vacina, construir uma página para consulta dos agendamentos feitos por dia e horário.

Regras de uso:
1. O agendamento deve ser feito em uma página por um formulário.
2. A disponibilidade das vagas são de 20 por dia.
3. Cada horário só tem a disponibilidade de 2 agendamentos para o mesmo horário.
4. Deve ser criada uma página para consultar os agendamentos.
5. O resultado dos agendamentos devem ser agrupados por dia e hora do agendamento.
6. O intervalo de tempo entre um agendamento e outro é de 1 hora.

Regras de negócio:
1. O paciente deve informar seu nome, data de nascimento e dia e horário para o agendamento.
2. Deverá ser checado se o formulário foi preenchido.
3. Os dados do paciente/agendamentos devem ser armazenados em memória.
4. Dentro da página para consultar os agendamentos deve ser possível visualizar a listagem de agendamentos feitos e informar se o agendamento foi realizado ou não, e qual a conclusão do atendimento(se foi realizado).
5. Quando o usuário der F5 ou recarregar a página os dados não podem ser perdidos.

Regras de Execução:
1. Portal escrito em React, utilizar o react-datepicker para o gerenciamento das datas;
2. Construir uma API em Node para receber os dados do portal.
3. Axios como cliente http.
4. Utilizar o Formik para a validação dos dados na view.
5. IDE fica a sua escolha.

Critérios de avaliação:
1. Organização do código.
2. Organização dos commits.
3. Organização do repositório.
4. O cumprimento de todas as regras estabelecidas.
5. A criação de testes.