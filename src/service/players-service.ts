import { PlayerModel, Statistics } from "../models/player-model"
import * as PlayerRepository from "../repositories/players-repository"
import * as HttpResponse from "../utils/http-helper"

export const getPlayerService = async () => {
    const data = await PlayerRepository.findAllPlayer()
    let result = null
    if (data) {
        result = await HttpResponse.ok(data)
    } else {
        result = await HttpResponse.noContent()
    }
    return result
}
export const getPlayerByIdService = async (id: number) => {
    const data = await PlayerRepository.findPlayerById(id)
    let result = null
    if (data) {
        result = await HttpResponse.ok(data)
    } else {
        result = await HttpResponse.noContent()
    }
    return result
}

export const createPlayerService = async (player: PlayerModel) => {

    let result = null
    if (Object.keys(player).length !== 0) {
        result = await PlayerRepository.insertPlayer(player);
        result = await HttpResponse.created()
    } else {
        result = await HttpResponse.badRequest({ message: "bad request" })
    }
    return result;
}

export const deletePlayerById = async (id: number) => {
    let result = null
    const isDelete = await PlayerRepository.deleteOnePlayer(id);
    if (isDelete) {
        result = await HttpResponse.ok({ message: "Player deleted" })
    } else {
        result = await HttpResponse.badRequest({ message: "there is no user" })
    }
    return result
}
export const updatePlayerService = async (id: number, statistics: Statistics) => {
    let result = null
    const data = await PlayerRepository.findAndModifyPlayer(id, statistics);
    if (Object.keys(data).length === 0) {
        result = await HttpResponse.badRequest({ message: "bad request" })
    } else {
        result = await HttpResponse.ok(data)
    }

    return result

}

