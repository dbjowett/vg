import Colours from '@/constants/Colours';
import { useColorScheme } from 'react-native';

export const useColours = () => Colours[useColorScheme() || 'light'];
