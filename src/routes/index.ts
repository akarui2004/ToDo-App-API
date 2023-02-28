import { Router } from "express";
import helmet from "helmet";
import { allowCors } from "src/middlewares";
import public0 from "./public";

const router = Router();

router.use(helmet(), allowCors());

// note: public routes doesn't have /public prefix
router.use(public0);

router.get("/list", (req, res) => {
  res.send("test");
})

export default router;
