import express from "express";
const router = express.Router();
import { player, radio } from "../controllers/mediaControllers";

router.route("/player").get(player);
router.route("/radio").get(radio);

export default router;