import { Injectable } from "injection-js";
import { Joke } from "../../models/joke";
import { JokesRepository } from "../interfaces/jokes.repository";

import db_connect from '../db_connect';
import { QueryResult } from "pg";

@Injectable()
export class JokesRepositoryImpl implements JokesRepository {
  async getJokes(): Promise<Joke[]> {
    const { rows } = await db_connect.query('SELECT * FROM jokes', []);
    return rows;
  }
  async getRandomJoke(): Promise<Joke> {
    const numberOfJokes = await (await db_connect.query('SELECT COUNT(*) FROM jokes', [])).rows[0];
    const { rows } = await db_connect.query('SELECT * FROM jokes WHERE id = $1', [this.getRandomInt(1, numberOfJokes.count)]);
    return rows[0];
  }

  getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}