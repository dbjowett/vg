import { useInfiniteQuery } from '@tanstack/react-query';
import { api } from '../api/client';
import type { ExploreGamesResponse } from '../types/game';

export const exploreGamesKey = ['games', 'explore'] as const;

interface UseExploreGamesOptions {
  pageSize?: number;
  genre?: string;
  sortBy?: 'popularity' | 'rating' | 'releaseDate';
}

export function useExploreGames({
  pageSize = 20,
  genre,
  sortBy = 'popularity',
}: UseExploreGamesOptions = {}) {
  return useInfiniteQuery({
    queryKey: [...exploreGamesKey, { pageSize, genre, sortBy }],
    queryFn: async ({ pageParam = 1 }) => {
      const params = new URLSearchParams({
        page: pageParam.toString(),
        pageSize: pageSize.toString(),
        sortBy,
        ...(genre && { genre }),
      });

      return api.get(`/games/explore?${params}`) as Promise<ExploreGamesResponse>;
    },
    getNextPageParam: (lastPage) => lastPage.nextPage,
    initialPageParam: 1,
  });
}
