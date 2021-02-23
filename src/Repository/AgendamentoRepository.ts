import { isEqual } from 'date-fns';
import AgendamentosRoutesModel from '../models/AgendamentoRoutesModel';
//data transfer object serve pra transferir um objeto de um lugar p/ outro
interface CreateAgendamentoDTO{
   profissional : string;
   date : Date;
}

class AgendamentoRepository{
    private agendamentos: AgendamentosRoutesModel[];


    constructor() {
      this.agendamentos = [];
    }

    public getall():AgendamentosRoutesModel[] {
       return this.agendamentos;
    }

    public findByDate(date:Date): AgendamentosRoutesModel | null{
        const ProcurarAgendamento = this.agendamentos.find(agendament => isEqual(date, agendament.date));
        return ProcurarAgendamento || null;
    }

    public create({profissional, date}: CreateAgendamentoDTO): AgendamentosRoutesModel{
        const agendament = new AgendamentosRoutesModel({profissional, date});

        this.agendamentos.push(agendament);

        return agendament;
    }
}


export default AgendamentoRepository;
