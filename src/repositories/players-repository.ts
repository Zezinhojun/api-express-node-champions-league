import { PlayerModel, Statistics } from "../models/player-model"


const database: PlayerModel[] = [
    {
        id: 1,
        name: "Lionel Messi",
        club: "Paris Saint-Germain",
        nationality: "Argentina",
        position: "Forward",
        statistics: {
            Overall: 93,
            Pace: 85,
            Shooting: 94,
            Passing: 91,
            Dribbling: 95,
            Defending: 38,
            Physical: 65
        }
    },
    {
        id: 2,
        name: "Neymar Junior",
        club: "Paris Saint-Germain",
        nationality: "Brazil",
        position: "Forward",
        statistics: {
            Overall: 91,
            Pace: 89,
            Shooting: 92,
            Passing: 90,
            Dribbling: 94,
            Defending: 40,
            Physical: 69
        }
    },
    {
        id: 3,
        name: "Cristiano Ronaldo",
        club: "Al-Nassr",
        nationality: "Portugal",
        position: "Forward",
        statistics: {
            Overall: 92,
            Pace: 88,
            Shooting: 96,
            Passing: 85,
            Dribbling: 89,
            Defending: 30,
            Physical: 78
        }
    },
    {
        id: 4,
        name: "Kylian Mbappé",
        club: "Paris Saint-Germain",
        nationality: "France",
        position: "Forward",
        statistics: {
            Overall: 92,
            Pace: 96,
            Shooting: 90,
            Passing: 85,
            Dribbling: 93,
            Defending: 35,
            Physical: 75
        }
    },
    {
        id: 5,
        name: "Kevin De Bruyne",
        club: "Manchester City",
        nationality: "Belgium",
        position: "Midfielder",
        statistics: {
            Overall: 91,
            Pace: 79,
            Shooting: 85,
            Passing: 95,
            Dribbling: 89,
            Defending: 50,
            Physical: 74
        }
    },
    {
        id: 6,
        name: "Robert Lewandowski",
        club: "FC Barcelona",
        nationality: "Poland",
        position: "Forward",
        statistics: {
            Overall: 92,
            Pace: 81,
            Shooting: 96,
            Passing: 84,
            Dribbling: 87,
            Defending: 40,
            Physical: 78
        }
    },
    {
        id: 7,
        name: "Virgil van Dijk",
        club: "Liverpool",
        nationality: "Netherlands",
        position: "Defender",
        statistics: {
            Overall: 91,
            Pace: 77,
            Shooting: 60,
            Passing: 75,
            Dribbling: 65,
            Defending: 93,
            Physical: 88
        }
    },
    {
        id: 8,
        name: "Sergio Ramos",
        club: "Paris Saint-Germain",
        nationality: "Spain",
        position: "Defender",
        statistics: {
            Overall: 89,
            Pace: 75,
            Shooting: 65,
            Passing: 74,
            Dribbling: 70,
            Defending: 91,
            Physical: 85
        }
    },
    {
        id: 9,
        name: "Joshua Kimmich",
        club: "Bayern Munich",
        nationality: "Germany",
        position: "Midfielder",
        statistics: {
            Overall: 90,
            Pace: 79,
            Shooting: 82,
            Passing: 88,
            Dribbling: 84,
            Defending: 86,
            Physical: 76
        }
    },
    {
        id: 10,
        name: "Manuel Neuer",
        club: "Bayern Munich",
        nationality: "Germany",
        position: "Goalkeeper",
        statistics: {
            Overall: 90,
            Pace: 55,
            Shooting: 20,
            Passing: 75,
            Dribbling: 60,
            Defending: 89,
            Physical: 90
        }
    }
];

export const findAllPlayer = async (): Promise<PlayerModel[]> => {
    return database
}

export const findPlayerById = async (id: number): Promise<PlayerModel | undefined> => {
    return database.find(player => player.id === id)
}

export const insertPlayer = async (player: PlayerModel) => {
    database.push(player)
}

export const deleteOnePlayer = async (id: number) => {
    const index = database.findIndex(p => p.id === id)
    if (index !== -1) {
        database.splice(index, 1);
        return true
    }

    return false
}

export const findAndModifyPlayer = async (id: number, statistics: Statistics) => {
    const playerIndex = database.findIndex(p => p.id === id)
    if (playerIndex !== -1) {
        database[playerIndex].statistics = statistics;
    }

    return database[playerIndex]
}