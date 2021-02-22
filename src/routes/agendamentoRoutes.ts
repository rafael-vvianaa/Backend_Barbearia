import { Router } from 'express';
import { uuid } from 'uuidv4';
// https://localhost:3333/agendamentos

const agendamentosRouter = Router();

//salvando em memoria antes te colocar o banco
const agendamentos = [];

agendamentosRouter.post('/', (request, response) => {

   const { profissional, date } = request.body;

   const agendament = {
       id: uuid(),
       profissional,
       date,
   };

   agendamentos.push(agendament);

   return response.json(agendament);

})

export default agendamentosRouter;


