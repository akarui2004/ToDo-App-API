import { Router } from "express";

const router = Router();

router.get('/priorities', (req: any, res: any) => {
  console.log('All Priorities');
});

router.get('/priority/:id', (req: any, res: any) => {
  console.log('Detail Priority ID:', req.params.id);
});


// Export the router
export default router;