import { Router } from 'express';
import { startOfHour, parseISO, isEqual } from 'date-fns';
import AgendamentosRoutesModel from '../models/agendamentoRoutesModel';

// https://localhost:3333/agendamentos

const agendamentosRouter = Router();




//salvando em memoria antes te colocar o banco
const agendamentos: AgendamentosRoutesModel[] = [];

agendamentosRouter.post('/', (request, response) => {

   const { profissional, date } = request.body;

   //convertendo a data/hora so para mostrar a data com min,seg zerados.
   const parseDate = startOfHour(parseISO(date));

   const verificarHorarioAgendamento = agendamentos.find(agendament => isEqual(parseDate, agendament.date));

   if(verificarHorarioAgendamento){
       return response.status(400).json({message:"Horario ja alocado"});
   }

   const agendament = new AgendamentosRoutesModel(profissional, parseDate);

   agendamentos.push(agendament);

   return response.json(agendament);

})

export default agendamentosRouter;


