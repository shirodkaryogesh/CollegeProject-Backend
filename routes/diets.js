import { Router } from "express";
import { getDiets } from "../controller/diets";

const router = Router();

router.get(`/get/:gender/:calories/:level`, getDiets);

export default router;
