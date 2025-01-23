export interface Game {
  id: string;
  title: string;
  coverImage: string;
  rating: number;
  releaseDate: string;
  genres: string[];
}

export interface ExploreGamesResponse {
  games: Game[];
  total: number;
  nextPage?: number;
}
