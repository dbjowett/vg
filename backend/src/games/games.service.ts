import { Injectable } from '@nestjs/common';
import { IgdbService } from 'src/igdb/igdb.service';
import { GameDetails, PopularGame } from './games.controller';

@Injectable()
export class GameService {
  private cache: Map<string, any> = new Map();

  constructor(private readonly igdbService: IgdbService) {}

  async getPopularGames(): Promise<PopularGame[]> {
    const query = `fields game_id, value, popularity_type; sort value desc; limit 9; where popularity_type = 2;`;
    return this.igdbService.request<PopularGame[]>(
      'popularity_primitives',
      query,
    );
  }

  async getGameDetails(gameIds: number[]): Promise<GameDetails[]> {
    const query = `fields name, cover.*; where id = (${gameIds.join(',')});`;
    return this.igdbService.request<GameDetails[]>('games', query);
  }

  async getPopGamesWithDetails() {
    const cacheKey = 'popular_games';
    const cachedData = this.cache.get(cacheKey);

    if (cachedData) return cachedData;

    const popularGames = await this.getPopularGames();
    const gameIds = popularGames.map((g) => g.game_id);
    const gameDetails = await this.getGameDetails(gameIds);

    this.cache.set(cacheKey, gameDetails);
    setTimeout(() => this.cache.delete(cacheKey), 3600 * 1000);

    return gameDetails;
  }
}
