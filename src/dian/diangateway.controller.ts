import { Request, Response } from "express";

import { CustomError } from "../domain";
import { DianGatewayService } from "./diangateway.service";

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
    const { headerDTO, crearGiradorDTO } = payload;
    this.dianGatewayService
      .crearGirador(headerDTO, crearGiradorDTO)
      .then((result) => res.json(result))
      .catch((error) => this.handleError(error, res));
  };
 

  consultGirador = async (req: Request, res: Response) => {
    const payload = req.body;
    await this.dianGatewayService
      .consultGirador(payload)
      .then((result) => res.json(result))
      .catch((error) => this.handleError(error, res));
  };



  pagaresFirmados = async (req: Request, res: Response) => {
    const payload = req.body;
    const { headerDTO, consultaPagareServiceDTO } = payload;
    await this.dianGatewayService
      .consultarPagares(headerDTO,consultaPagareServiceDTO)
      .then((result) => res.json(result))
      .catch((error) => this.handleError(error, res));
  };

  // Nuevo método para crear pagaré
  createPagare = async (req: Request, res: Response) => {
    const payload = req.body;
   
    const { headerDTO,documentoPagareServiceDTO } = payload;
    this.dianGatewayService
      .crearPagare(headerDTO, documentoPagareServiceDTO)
      .then((result) => res.json(result))
      .catch((error) => this.handleError(error, res));
  };
}