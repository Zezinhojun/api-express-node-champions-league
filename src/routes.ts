import { Router } from "express";
import * as PlayerController from "./controller/players-controller";
import * as ClubController from "./controller/clubs-controller";

export const router = Router()

router.get("/players", PlayerController.getPlayer)
router.get("/players/:id", PlayerController.getPlayerById)
router.post("/players", PlayerController.postPlayer)
router.delete("/players/:id", PlayerController.deletePlayer)
router.patch("/players/:id", PlayerController.updatePlayer)

router.get("/clubs",ClubController.getClubs)