import { Inject, Injectable } from "injection-js";
import { JOKES_REPOSITORY } from "../injection/injection_tokens";
import { Joke } from "../models/joke";
import { JokesRepository } from "../repositories/interfaces/jokes.repository";

@Injectable()
export default class JokesService {
  constructor(
    @Inject(JOKES_REPOSITORY)
    private readonly jokesRepository: JokesRepository,
  ) { }
  async getJokes(): Promise<Joke[]> {
    return await this.jokesRepository.getJokes();
  }
  async getRandom():Promise<Joke>{
    return await this.jokesRepository.getRandomJoke();
  }
}