import { Request, Response } from "express";
import * as Service from "../service/players-service";
import { Statistics } from "../models/player-model";

export const getPlayer = async (request: Request, response: Response) => {
    const httpResponse = await Service.getPlayerService()
    response.status(httpResponse.statusCode).json(httpResponse.body);
}

export const getPlayerById = async (request: Request, response: Response) => {
    const id = parseInt(request.params.id)
    const httpResponse = await Service.getPlayerByIdService(id)
    response.status(httpResponse.statusCode).json(httpResponse.body)

}

export const postPlayer = async (request: Request, response: Response) => {
    const bodyValue = request.body
    const httpResponse = await Service.createPlayerService(bodyValue)
    if (httpResponse) {
        response.status(httpResponse.statusCode).json(httpResponse.body)
    }
}

export const deletePlayer = async (request: Request, response: Response) => {
    const id = parseInt(request.params.id)
    const httpResponse = await Service.deletePlayerById(id)
    response.status(httpResponse.statusCode).json(httpResponse.body)

}
export const updatePlayer = async (request: Request, response: Response) => {
    const id = parseInt(request.params.id)
    const bodyValue: Statistics = request.body
    const httpResponse = await Service.updatePlayerService(id, bodyValue)
    response.status(httpResponse.statusCode).json(httpResponse.body)

}

