import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Alert } from 'react-native';
import { FaveGame } from '../types/game';
import { api } from '../utils/api';

const removeFromFavourites = async (gameId: string) =>
  await api.delete('favourites', { json: { gameId } }).json();

export const useRemoveFavouriteGame = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: removeFromFavourites,
    mutationKey: ['removeFavouriteGame'],
    onSettled: () =>
      queryClient.invalidateQueries({
        queryKey: ['favouriteGames', 'favouriteGameDetails'],
      }),
    onMutate: async (gameId) => {
      await queryClient.cancelQueries({
        queryKey: ['favouriteGames'],
      });
      const prevFaves = queryClient.getQueryData([
        'favouriteGames',
      ]) as FaveGame[];
      queryClient.setQueryData(['favouriteGames'], (prev: FaveGame[]) =>
        prev.filter((fave) => fave.gameId !== gameId),
      );
      return { prevFaves };
    },
    onError: (error) => {
      Alert.alert(
        'Error',
        'An error occurred while delete the game from your favourites. Please try again later.',
        [{ text: 'OK' }],
      );
      console.error('Error adding game to favourites:', error);
    },
  });
};
