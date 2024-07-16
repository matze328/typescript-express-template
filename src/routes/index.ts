import { Router } from 'express';
import TodosRouter from './todos';
import UserRouter from './users';
import StatisticsRouter from './stats/StatisticsRouter';

const AppRouter = Router();

AppRouter.use('/todos', TodosRouter);
AppRouter.use('/users', UserRouter);
AppRouter.use('/stats', StatisticsRouter);
export default AppRouter;
