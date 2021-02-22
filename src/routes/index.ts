import { Router } from 'express';
import agendamentosRouter from './agendamentoRoutes' ;

const routes = Router();

routes.use('/agendamentos', agendamentosRouter);


export default routes;
