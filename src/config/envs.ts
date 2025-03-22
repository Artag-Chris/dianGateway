import 'dotenv/config';
import { get } from 'env-var';
 

export const envs = {  

  PORT: get('PORT').required().asPortNumber(),
  DIAN_URL: get('DIAN_URL').required().asString(),
  ID_SW:get('ID_SW').required().asString(),
  SOFTWARE_PIN:get('SOFTWARE_PIN').required().asString(),
  CODIGO_DEL_PRESTADOR:get('CODIGO_DEL_PRESTADOR').required().asString(),
  TEST_SET_ID:get('TEST_SET_ID').required().asString(),
 
}