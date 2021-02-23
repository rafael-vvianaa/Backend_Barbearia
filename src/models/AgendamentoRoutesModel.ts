import {uuid} from 'uuidv4';

class AgendamentosRoutesModel{
    id: string;

    profissional: string;

    date: Date;

    //Omit recebe todos os parametros menos um defenido
    constructor({profissional, date}: Omit<AgendamentosRoutesModel, 'id'>) {

        this.id = uuid();
        this.profissional = profissional;
        this.date = date;
    }
}

export default AgendamentosRoutesModel;
