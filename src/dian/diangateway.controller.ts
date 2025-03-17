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
  createGirador = async (req: Request, res: Response) => {
    const payload = req.body;
    const {  } = payload;
    this.dianGatewayService
      .crearGirador()
      .then((result) => res.json(result))
      .catch((error) => this.handleError(error, res));
  };
 

  consultGirador = async (req: Request, res: Response) => {
    const payload = req.body;
    const {} =payload;
    await this.dianGatewayService
      .consultGirador()
      .then((result) => res.json(result))
      .catch((error) => this.handleError(error, res));
  };



  pagaresFirmados = async (req: Request, res: Response) => {
    const payload = req.body;
    const {  } = payload;
    await this.dianGatewayService
      .consultarPagares()
      .then((result) => res.json(result))
      .catch((error) => this.handleError(error, res));
  };

  // Nuevo método para crear pagaré
  createPagare = async (req: Request, res: Response) => {
    const payload = req.body;
   
    const {  } = payload;
    this.dianGatewayService
      .crearPagare()
      .then((result) => res.json(result))
      .catch((error) => this.handleError(error, res));
  };
}