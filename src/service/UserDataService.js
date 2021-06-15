import AxiosInstance from '../http-common';

// Todas as requisições retornam uma promisse vocês precisaram resolve-las
// Se houver alguma requisição faltando, ou algum erro por favor avisar.
// Não entendi muito bem algumas coisas que o professor especificou em relação
// as interações entre os dados, e da forma que ele fez até o momento acrédito
// que possa melhorar então esperarei até a aula de amanhã para falar com ele
// ou seja saiba que este arquivo talvez esteja incompleto, porém creio que seja
// o suficiente para adiantar o trabalho de alguns de vocês.

// Retorna o usuário que contem o ID passado na requisição.
const getUserById = (userId) => {
  return AxiosInstance?.get(`/usuario/${userId}`);
}

// Retornará Todos os usuários cadastrados,
// cuidado como usa pode sobrecarregar o app.
const getUsers = () => {
  return AxiosInstance?.get(`/usuario/`);
}

// Função que retorna usuarios que contenham o email do passado como parametro,
// Essa função pode retornar um array contendo n usuários,
// o MockAPI não faz busca estrita
// então lembre-se de fazer um filtro antes,
// recomendo usar a função find procurando
// pelo úsuario e senha compativeis.
const getUsersByEmail = (email) => {
  return AxiosInstance?.get(`/usuario?email=${email}`);
}

// Função que retorna usuarios pelo nome do usuario passado como parametro,
// as observações aplicadas na função "getUsersByEmail"
// se aplicam aqui.
// Essa função pode retornar um array contendo n usuários,
// o MockAPI não faz busca estrita
// então lembre-se de fazer um filtro antes,
// recomendo usar a função find procurando
// pelo úsuario e senha compativeis.
const getUserByUsersName = (username) => {
  return AxiosInstance?.get(`/usuario?username=${username}`);
}

// Função para criar um novo usuário, recebe um objeto que conterá
// os dados a serem salvo.
const createUser = (userData) => {
  return AxiosInstance?.post(`/usuario/`, userData);
}

// Função para atualizar os dados do usuário,
// recebe o id do usuário e o objeto contendo os novos dados
// Saudades PATCH
const updateUserData = (userId, userData) => {
  return AxiosInstance?.put(`/usuario/${userId}`, userData);
}

// Função para remover um usuário, cuidado quando usar
// não haverá volta após a remoção.
const deleteUser = (userId) => {
  return AxiosInstance?.delete(`/usuario/${userId}`);
}

export default {
  getUserById,
  getUsers,
  getUsersByEmail,
  createUser,
  updateUserData,
  deleteUser,
  getUserByUsersName,

}
