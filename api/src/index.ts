import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import 'reflect-metadata';
import { Provider, ReflectiveInjector } from 'injection-js';
import { JOKES_REPOSITORY, JOKES_SERVICE } from './injection/injection_tokens';
import JokesService from './services/jokes.service';
import JokesController from './controllers/jokes.controller';
import { JokesRepositoryImpl } from './repositories/implementations/jokes.repository_impl';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

const providers: Provider[] = [
  {
    provide: JOKES_REPOSITORY, useClass: JokesRepositoryImpl,
  },
  {
    provide: JOKES_SERVICE, useClass: JokesService
  },
  JokesController,
];
const injector = ReflectiveInjector.resolveAndCreate(providers);
const jokesController: JokesController = injector.get(JokesController);

app.get('/api/jokes', (req: Request, res: Response) => {
  jokesController
    .getAll()
    .then(jokes => res.send(jokes))
    .catch(err => {
      console.error(err); // audit middleware would be ideal
      res.sendStatus(500);
    });
});
app.get('/api/jokes/random', (req: Request, res: Response) => {
  jokesController
    .getRandom()
    .then(joke => res.send(joke))
    .catch(err => {
      console.error(err);
      res.sendStatus(500);
    })
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});