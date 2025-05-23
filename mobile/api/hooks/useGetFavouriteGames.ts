import { useQuery } from '@tanstack/react-query';
import { api } from '../utils/api';

interface FaveGame {
  createdAt: string;
  gameId: string;
  updatedAt: string;
  userId: string;
}

const getFavourites = async () => await api.get('favourites').json<FaveGame[]>();

export const useGetFavouriteGames = () => {
  return useQuery({
    queryKey: ['favouriteGames'],
    queryFn: getFavourites,
  });
};
