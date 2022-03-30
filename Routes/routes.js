import { Router } from "express";

import { adnService } from "../middlewares/adnService.js";

const router = Router();

// router.post("/mutant", signup);
// router.get("/report", adnService);

router.get("/mutant", adnService);

export default router;
