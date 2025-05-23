import { useDisclosure } from '@mantine/hooks';
import { createFileRoute } from '@tanstack/react-router';
import { useRef } from 'react';
import { AuthModal } from '../components/AuthModal';
import { Features } from '../components/Features';
import { Hero } from '../components/Hero';
import { useOAuthTokenHandler } from '../hooks/useOAuthHandler';
import { api } from '../utils/api';
import { useUser } from '../utils/auth';

interface GameDetails {
  id: number;
  cover: Cover;
  name: string;
}
interface Cover {
  id: number;
  url: string;
  width: number;
  height: number;
}

const GRID_ITEMS_PER_ROW = 3;

const createImageGridItems = (data: GameDetails[]) => {
  const gridItems = data.map((item: GameDetails) => ({
    src: item.cover.url.replace('t_thumb', 't_cover_big'),
    alt: item.name,
  }));

  const gridItemsSplit = [];
  for (let i = 0; i < gridItems.length; i += GRID_ITEMS_PER_ROW) {
    gridItemsSplit.push(gridItems.slice(i, i + GRID_ITEMS_PER_ROW));
  }

  return gridItemsSplit;
};

const fetchHeroImages = async (): Promise<GameDetails[]> => {
  const res = await api('games/popular');
  if (!res.ok) throw new Error('Failed to fetch posts');
  return res.json();
};
export const Route = createFileRoute('/login')({
  component: RouteComponent,
  loader: async () => fetchHeroImages(),
});

function RouteComponent() {
  const { data: user } = useUser();
  const isLoggedIn = !!user;
  const [opened, { toggle: toggleModal }] = useDisclosure(false);

  const featuresRef = useRef<HTMLDivElement>(null);
  useOAuthTokenHandler();

  const data = Route.useLoaderData();
  const imageGridItems = createImageGridItems(data);

  const handleScrollToFeatures = () => {
    featuresRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSignUpClick = () => {
    if (isLoggedIn) {
      window.location.href = '/';
    } else {
      toggleModal();
    }
  };

  return (
    <>
      <Hero
        w="100%"
        imageGridItems={imageGridItems}
        onSignUpClick={handleSignUpClick}
        scrollToFeatures={handleScrollToFeatures}
        isLoggedIn={isLoggedIn}
      />
      <Features ref={featuresRef} />
      <AuthModal opened={opened} toggleModal={toggleModal} />
    </>
  );
}
