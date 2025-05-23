import { useQuery } from '@tanstack/react-query';
import { api } from '../utils/api';

interface DetailGame {
  cover: {
    url: string;
  };
  name: string;
  id: string;
  total_rating: number;
  description: string;
}

const fetchGames = async (query: string) => {
  try {
    const data = await api(`games/?q=${query}`).json<DetailGame[]>();
    return data.map((game: DetailGame) => ({
      image: game.cover?.url ? `https:${game.cover.url}` : '',
      value: game.name,
      id: game.id,
      rating: game?.total_rating,
      description: `Game ID: ${game.id}`,
    }));
  } catch (error) {
    console.error('An error occurred:', error);
  }
};

export const useGameSearch = (query: string) => {
  return useQuery({
    queryKey: ['games', query],
    queryFn: () => fetchGames(query),
    enabled: !!query,
  });
};
