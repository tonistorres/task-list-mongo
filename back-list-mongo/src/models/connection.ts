// imortando mongoose para dentro do projeto
import mongoose from 'mongoose';

const { PORT_DOCKER } = process.env;

/** Criando uma classe de conexão  */
export default class MongoConnection {
  /** Craindo um método estatico assincrono com nome de connect que recebe como 
     * parâmetro uma URI do tipo String que nada mais é que a proprio caminho ou 
     * link de conexão com o banco de dados mongodb por meio da porta padrão em 
     * nosso caso 27017, tenho já na minha URI um valor default setado o que nada 
     * me emprede no momento que instânciar esse métode eu possa passar uma outra 
     * conexão
     */
  static async connect(URI = `mongodb://localhost:${PORT_DOCKER}/dbtask`) {
    await mongoose.connect(URI);
  }
}