import express from "express";
const router = express.Router();
import getSongIdByName from "../middlewares/getSongIdByName";
import { player, radio } from "../controllers/mediaControllers";

router.route("/player/:id").get(getSongIdByName ,player);
router.route("/radio/:id").get(getSongIdByName ,radio);

export default router;