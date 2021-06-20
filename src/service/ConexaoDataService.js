import AxiosInstance from '../http-common';

/**
  * Esta função irá retornar todos os dados contidos na tabela conexao
  * 
  * @example
  *   const example = () => {
  *     ...
  *     Foo.getConnections(); // Promisse
  *     ...
  *   }
  * 
  * @returns {Promisse}
*/
const getConnections = () => {
    return AxiosInstance?.get(`/conexao/`);
}

export default {
    getConnections,
}
