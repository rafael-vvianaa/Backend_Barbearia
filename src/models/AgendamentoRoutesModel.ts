import {uuid} from 'uuidv4';
class AgendamentosRoutesModel{
    id: string;

    profissional: string;

    date: Date;


    constructor(profissional:string, date:Date){

        this.id = uuid();
        this.profissional = profissional;
        this.date = date;
    }
}

export default AgendamentosRoutesModel;
