import { Router } from "express";
import diet from "./diets";
const router = Router();

router.use("/diet", diet);

export default router;
