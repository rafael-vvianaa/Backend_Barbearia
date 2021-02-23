import { Router } from 'express';
import { parseISO } from 'date-fns';
import AgendamentoRepository from '../Repository/AgendamentoRepository';
import CreateAgendamentoService from '../services/CreateAgendamentoService';

// https://localhost:3333/agendamentos

const agendamentosRouter = Router();

const agendamentoRepository = new AgendamentoRepository();

agendamentosRouter.get('/', (request, response) => {
    const agendamentos = agendamentoRepository.getall();
    return response.json(agendamentos);
});

agendamentosRouter.post('/', (request, response) => {
 try{
    const { profissional, date } = request.body;

    //convertendo a data/hora so para mostrar a data com min,seg zerados.
    const parseDate = parseISO(date);

    const createAgendamento = new CreateAgendamentoService(agendamentoRepository);

    const agendament = createAgendamento.execute({  date: parseDate, profissional, });


    return response.json(agendament);
 } catch (error) {
     return response.status(400).json({error: error.message});
 }

});

export default agendamentosRouter;


