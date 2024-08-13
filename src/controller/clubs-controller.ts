import { Request, Response } from "express";
import * as Service from "../service/clubs-service";

export const getClubs = async (request: Request, response: Response) => {
    const result = await Service.getAllClubsService()
    response.status(result.statusCode).json(result.body)
}


