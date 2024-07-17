import { Router } from 'express';
import TodosRouter from './todos';
import  { UsersRouter } from './users';
import StatisticsRouter from './stats/StatisticsRouter';

const AppRouter = Router();

AppRouter.use('/todos', TodosRouter);
AppRouter.use('/users', UsersRouter);
AppRouter.use('/stats', StatisticsRouter);
export default AppRouter;
