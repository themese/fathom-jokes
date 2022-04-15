import { Joke } from "../../models/jokes";


export interface JokesRepository {
  getJokes(): Promise<Joke[]>;
  getRandomJoke(): Promise<Joke>;
}