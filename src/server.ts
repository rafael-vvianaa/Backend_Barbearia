import express from 'express';
import routes from './routes';

const app = express();

//usado para corrigir um erro onde n conseguia passar o json na requisição
app.use(express.json());

app.use(routes);


app.listen(3333, () => {
  console.log('Servidor iniciado...');
});
