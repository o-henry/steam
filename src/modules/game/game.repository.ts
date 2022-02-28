import { EntityRepository, Repository } from 'typeorm';
import { Game } from './model/game.entity';

@EntityRepository(Game)
export class GameRepository extends Repository<Game> {}
