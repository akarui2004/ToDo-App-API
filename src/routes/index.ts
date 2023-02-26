import { Router } from "express";
import helmet from "helmet";
import { allowCors } from "src/middlewares";
import public0 from "./public";
import prioritiesRouter from './api/priorities';

const router = Router();

router.use(helmet(), allowCors());

// note: public routes doesn't have /public prefix
router.use(public0);

// api routes with /api prefix
router.use('/api', prioritiesRouter);

export default router;