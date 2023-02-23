import { Router } from "express";
import { config } from "src/config";

const router = Router();

router.get("/home", (req, res, next) => {
  res.send("Home page");
});

export default router;
