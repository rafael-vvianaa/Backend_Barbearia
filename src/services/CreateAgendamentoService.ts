import { startOfHour } from 'date-fns';
import AgendamentosRoutesModel from '../models/AgendamentoRoutesModel';
import AgendamentoRepository from '../Repository/AgendamentoRepository';


interface RequestDTO{
    profissional: string;
    date: Date;
}

class CreateAgendamentoService {
    private agendamentoRepository : AgendamentoRepository;

    constructor(_agendamentoRepository: AgendamentoRepository){

        this.agendamentoRepository = _agendamentoRepository;

    }
    public execute({ date, profissional }: RequestDTO): AgendamentosRoutesModel {
        const agendamentoDate = startOfHour(date);

        const verificarHorarioAgendamento = this.agendamentoRepository.findByDate(
            agendamentoDate,);


        if (verificarHorarioAgendamento) {
            throw Error('Horario ja alocado');
        }

        const agendament = this.agendamentoRepository.create({
            profissional, date: agendamentoDate,
        });

        return agendament;

    }

}

export default CreateAgendamentoService;
