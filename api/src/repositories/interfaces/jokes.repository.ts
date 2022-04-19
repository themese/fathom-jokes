import { Joke } from "../../models/joke";


export interface JokesRepository {
  getJokes(): Promise<Joke[]>;
  getRandomJoke(): Promise<Joke>;
}