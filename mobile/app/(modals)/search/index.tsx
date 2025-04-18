import { useGameSearch } from '@/api/hooks/useGameSearch';
import { View } from '@/components/Themed';
import { useHeaderHeight } from '@react-navigation/elements';
import { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, TextInput } from 'react-native';

const useDebouncedValue = (value: string, delay = 500) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

const Page = () => {
  const headerHeight = useHeaderHeight();
  const [input, onChangeInput] = useState<string>('');

  const debouncedInput = useDebouncedValue(input, 300);

  const { data, isLoading, isFetching } = useGameSearch(debouncedInput);

  console.log('data', data);

  return (
    <View style={[styles.container, { paddingTop: headerHeight }]}>
      <TextInput
        style={styles.input}
        placeholder="Search.."
        onChangeText={onChangeInput}
        value={input}
      />
      {isLoading && <Text>Loading...</Text>}

      {/* TODO: MAKE INTO LIST */}
      {data?.map((item) => (
        <View
          key={item.id}
          style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
            <Image
              source={{ uri: item.image }}
              style={{ width: 50, height: 50, borderRadius: 25 }}
            />
            <View style={{ flex: 1, gap: 5 }}>
              <Text style={styles.gameTitle}>{item.value}</Text>
              <Text style={styles.gamedescription}>{item.description}</Text>
            </View>
          </View>
        </View>
      ))}
    </View>
  );
};

export default Page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gameTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  gamedescription: {
    fontSize: 12,
  },
  input: {
    maxHeight: 50,
    margin: 12,
    fontSize: 18,
    borderColor: '#c2c2c2',
    borderWidth: StyleSheet.hairlineWidth,
    flex: 1,
    padding: 14,
    borderRadius: 30,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
});
