import { Injectable } from "injection-js";
import { Joke } from "../../models/jokes";
import { JokesRepository } from "../interfaces/jokes.repository";

@Injectable()
export class JokesRepositoryImpl implements JokesRepository {
  getJokes(): Promise<Joke[]> {
    throw new Error("Method not implemented.");
  }
  getRandomJoke(): Promise<Joke> {
    throw new Error("Method not implemented.");
  }
}