import { Router } from 'express';
import { DecevalGatewayRoutes } from '../dian/diangateway.routes';



export class AppRoutes {
  static get routes(): Router {
    const router = Router();
   
    router.use(`/gateway/dian`, DecevalGatewayRoutes.routes );

    return router;
  }
}

