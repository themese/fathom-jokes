import { InjectionToken } from "injection-js";
import { JokesRepositoryImpl } from "../repositories/implementations/jokes.repository_impl";
import JokesService from "../services/jokes.service";

export const JOKES_SERVICE = new InjectionToken<JokesService>('JOKES_REPOSITORY');
export const JOKES_REPOSITORY = new InjectionToken<JokesRepositoryImpl>('JOKES_SERVICE');