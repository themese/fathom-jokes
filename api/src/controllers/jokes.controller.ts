import { Inject } from "injection-js";
import {  JOKES_SERVICE } from "../injection/injection_tokens";
import { Joke } from "../models/jokes";
import JokesService from "../services/jokes.service";


export default class JokesController {
  constructor(
    @Inject(JOKES_SERVICE)
    private jokesService: JokesService,
  ) { }
  async getAll(): Promise<Joke[]> {
    return await this.jokesService.getJokes();
  }
  async getRandom(): Promise<Joke> {
    return await this.jokesService.getRandom();
  }
}