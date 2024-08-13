import { ClubModel } from "../models/club-model"
import fs from 'fs'
import path from "path"
const database = [
    {
        id: 1,
        name: "Real Madrid"
    },
    {
        id: 2,
        name: "Sport Club do Recife"
    },
    {
        id: 3,
        name: "Barcelona FC"
    },
]
export const findAllClubs = async (): Promise<ClubModel[]> => {
    const data = await fs.readFileSync("./src/data/clubs.json", "utf-8")
    const clubs: ClubModel[] = JSON.parse(data);
    return clubs
}