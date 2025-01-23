import { StyleSheet } from 'react-native';

import { Text, View } from '@/components/Themed';
import { useQuery } from '@tanstack/react-query';
// import { useExploreGames } from '@vg/shared/src';

const getRepoData = async () => {
  const response = await fetch('https://api.github.com/repos/TanStack/query');
  return await response.json();
};

export default function TabOneScreen() {
  const { isPending, data } = useQuery({ queryKey: ['repoData'], queryFn: getRepoData });
  // const games = useExploreGames();

  if (isPending) return <Text>Loading...</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>👀 {data.subscribers_count}</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text style={styles.title}>✨ {data.stargazers_count}</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text style={styles.title}>🍴 {data.forks_count}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
