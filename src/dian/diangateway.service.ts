import XMLAdapter from "../config/adapters/js2xmlparser.adapter";
import https from 'https';
import axios from "axios";
import { parseStringPromise } from 'xml2js';
import { facturaGenerica } from "../domain/dtos/metodos/facturagenerica";
import { envs } from "../config/envs";

const httpsAgent = new https.Agent({ rejectUnauthorized: false });

export class DianGatewayService {
  constructor() { }


  async createFactura(
    payload: any
  ): Promise<any> {

    //metodos para calcular los valores
    const currentDateTime = new Date().toISOString().split('.')[0]; // YYYY-MM-DDTHH:MM:SS format
    const currentTime = new Date().toISOString().split('T')[1].split('.')[0]; // HH:MM:SS format
    console.log(payload)
    //return facturaGenerica(payload)
    try {
      const response = await axios.post(envs.DIAN_URL, facturaGenerica(payload), {
        headers: {
          Accept: 'application/xml',
          'Content-Type': 'application/xml' },
      })

      console.log(response.data)

      //manejo de la espuesta  se hara un parse de xml a json 
      return 'ok'
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('Error al comunicarse con la dian:', {
          message: error.message,
          code: error.code,
          response: error.response?.data,
          config: error.config,
        });
      } else {
        console.error('Error desconocido:', error);
      }
      throw new Error(`Error al comunicarse con la Dian ${String(error)}`);
    }

  }

}