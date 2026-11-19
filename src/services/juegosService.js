import { obtenerJuegos } from '../repositories/juegosRepository.js'

export const listarJuegos = async () => {
  return obtenerJuegos();
}
