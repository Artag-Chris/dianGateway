import { Router } from "express";
import { DianGatewayController } from "./diangateway.controller";
import { DianGatewayService } from "./diangateway.service";


export class DecevalGatewayRoutes {
  static get routes() {
    const router = Router();
    const dianGatewayService = new DianGatewayService();
    const dianGatewayController = new DianGatewayController(dianGatewayService);

    router.post(`/crearfactura`, dianGatewayController.createFactura);


    return router;
  }
}