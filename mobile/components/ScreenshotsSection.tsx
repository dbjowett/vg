import { imageLoader } from '@/utils';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Animated from 'react-native-reanimated';

type Props = {
  screenshots: { url: string }[];
  onImagePress: (index: number) => void;
};

export const ScreenshotsSection = ({ screenshots, onImagePress }: Props) => {
  return (
    <View style={{ marginTop: 20 }}>
      <Text style={styles.subtitle}>Screenshots</Text>
      <ScrollView
        horizontal
        contentContainerStyle={styles.screenshotsContent}
        style={styles.screenshots}
        showsHorizontalScrollIndicator={false}
      >
        {screenshots.map((screenshot, index) => (
          <TouchableOpacity key={index} onPress={() => onImagePress(index)} activeOpacity={0.8}>
            <Animated.Image
              source={{
                uri: imageLoader({
                  src: screenshot.url,
                  quality: 6,
                  maxSize: true,
                }),
              }}
              style={[
                styles.screenshot,
                {
                  height: 135,
                  width: 240,
                  marginRight: index === screenshots.length - 1 ? 20 : 8,
                  marginLeft: index === 0 ? 20 : 0,
                },
              ]}
            />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  subtitle: { marginLeft: 20, fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  screenshotsContent: { flexDirection: 'row', gap: 10 },
  screenshots: {},
  screenshot: {
    borderRadius: 10,
    overflow: 'hidden',
  },
});
