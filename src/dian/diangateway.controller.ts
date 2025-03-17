import { Request, Response } from "express";
import { DianGatewayService } from "./diangateway.service";
import { CustomError } from "../domain/errors/customError";

export class DianGatewayController {
  constructor(
    private readonly dianGatewayService = new DianGatewayService()
  ) {}

  private handleError = (error: unknown, res: Response) => {
    if (error instanceof CustomError) {
      return res.status(error.statusCode).json({ error: error.message });
    }
    return res.status(500).json({ error: `Internal Server Error` });
  };

  // Métodos del controlador
  createFactura = async (req: Request, res: Response) => {
    const payload = req.body;
    const {  } = payload;
    this.dianGatewayService
      .createFactura()
      .then((result) => res.json(result))
      .catch((error) => this.handleError(error, res));
  };
 
}