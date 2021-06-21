import AxiosInstance from '../http-common';

/**
  * Esta função irá retornar o dado ta tabela cujo o id foi passado 
  * 
  * @example
  *   const example = () => {
  *     ...
  *     Foo.getuserbyid(3); // Promisse
  *     ...
  *   }
  * 
  * @param   {number} obrigatorio   parametro obrigatório
  * @param   {number} [opcional]    parametro ocional. note os '[  ]'
  * @returns {Promisse}
*/
const getUserById = (userId) => {
  return AxiosInstance?.get(`/usuario/${userId}`);
}

/**
  * Esta função irá retornar todos os dados contidos na tabela usuario  
  * 
  * @example
  *   const example = () => {
  *     ...
  *     Foo.getUsers(); // Promisse
  *     ...
  *   }
  * 
  * @returns {Promisse}
*/
const getUsers = () => {
  return AxiosInstance?.get(`/usuario/`);
}

/**
  * Função que retorna usuarios que contenham o email passado como parametro,
  * Essa função pode retornar um array contendo n usuários,
  * o MockAPI não faz busca estrita
  * então lembre-se de fazer um filtro antes,
  * recomendo usar a função find procurando
  * pelo úsuario e senha compativeis.
  * 
  * @example
  *   const example = () => {
  *     ...
  *     Foo.getUsersByEmail("Email"); // Promisse
  *     ...
  *   }
  * 
  * @param   {String} obrigatorio   parametro obrigatório
  * @returns {Promisse}
*/
const getUsersByEmail = (email) => {
  return AxiosInstance?.get(`/usuario?email=${email}`);
}

/**
  * Função que retorna usuarios que contenham o username passado como parametro,
  * Essa função pode retornar um array contendo n usuários,
  * o MockAPI não faz busca estrita
  * então lembre-se de fazer um filtro antes,
  * recomendo usar a função find procurando
  * pelo úsuario e senha compativeis.
  * 
  * @example
  *   const example = () => {
  *     ...
  *     Foo.getUserByUsersName("Username"); // Promisse
  *     ...
  *   }
  * 
  * @param   {String} obrigatorio   parametro obrigatório
  * @returns {Promisse}
*/
const getUserByUsersName = (username) => {
  return AxiosInstance?.get(`/usuario?username=${username}`);
}

/**
  * Função para criar um novo usuário, recebe um objeto que conterá
  * os dados a serem salvo.
  * 
  * @example
  *   const example = () => {
  *     ...
  *     Foo.createUser({p1: "foo", p2: "bar" ...}); // Promisse
  *     ...
  *   }
  * 
  * @param   {String} obrigatorio   parametro obrigatório
  * @returns {Promisse}
*/
const createUser = (userData) => {
  return AxiosInstance?.post(`/usuario/`, userData);
}

/**
  * Função para atualizar os dados do usuário,
  * 
  * @example
  *   const example = () => {
  *     ...
  *     Foo.updateUserData(1, {p1: "foo", p2: "bar" ...}); // Promisse
  *     ...
  *   }
  * 
  * @param   {Number} obrigatorio   parametro obrigatório
  * @param   {Object} obrigatorio   parametro obrigatório
  * @returns {Promisse}
*/
const updateUserData = (userId, userData) => {
  return AxiosInstance?.put(`/usuario/${userId}`, userData);
}

// não haverá volta após a remoção.
/**
  * Função para remover um usuário, cuidado quando usar
  * 
  * @example
  *   const example = () => {
  *     ...
  *     Foo.deleteUser(1); // Promisse
  *     ...
  *   }
  * 
  * @param   {Number} obrigatorio   parametro obrigatório
  * @returns {Promisse}
*/
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
