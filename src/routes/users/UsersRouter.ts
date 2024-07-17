/* eslint-disable @typescript-eslint/no-floating-promises */
import { Router } from 'express';

import UsersController, {
  
} from './UsersController';

const UsersRouter = Router();

/**
 * POST
 */
UsersRouter.get('/currentuser',async (req, res ) => {
  const controller = new UsersController();
  const result = await controller.getCurrentUser(parseInt(req.query.id as string) );
  res.json(result)
});

export default UsersRouter;