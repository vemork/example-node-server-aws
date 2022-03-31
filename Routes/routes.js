import { Router } from "express";

import { adnService } from "../middlewares/adnService.js";
import { statsService } from "../middlewares/statsService.js";

const router = Router();

router.post("/mutant", adnService);
router.get("/stats", statsService);

export default router;
