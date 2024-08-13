import * as ClubsRepository from "../repositories/clubs-repository"
import * as HttpResponse from "../utils/http-helper"

export const getAllClubsService = async () => {
    const data = await ClubsRepository.findAllClubs()
    let result = null

    if (data) {
        result = await HttpResponse.ok(data)
    } else {
        result = await HttpResponse.noContent()
    }
    return result
}
