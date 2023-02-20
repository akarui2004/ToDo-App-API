import { Router } from "express";

const router = Router();

router.get("/home", (req, res, next) => {
  res.send("Home is here");
});

export default router;