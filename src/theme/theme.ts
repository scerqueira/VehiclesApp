import { DefaultTheme } from '@react-navigation/native';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const heightScale = height / 812;
const widthScale = width / 375;

export const scale = (size: number, heightBased?: boolean): number =>
  heightBased ? size * heightScale : size * widthScale;

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    PRIMARY_50: '#D6E2F6',
    PRIMARY_100: '#A9C4E5',
    PRIMARY_200: '#7D9FDA',
    PRIMARY_300: '#4F79D0',
    PRIMARY_400: '#2C57B7',
    PRIMARY_500: '#152D6D',
    PRIMARY_600: '#132461',
    PRIMARY_700: '#0F1A56',
    PRIMARY_800: '#0C134B',
    PRIMARY_900: '#090C3F',
    SECONDARY_50: '#F6E0D9',
    SECONDARY_100: '#F0B7B1',
    SECONDARY_200: ' #E9928A',
    SECONDARY_300: '#E26F64',
    SECONDARY_400: '#D8483F',
    SECONDARY_500: '#DA291C',
    SECONDARY_600: '#C01E19',
    SECONDARY_700: '#A21816',
    SECONDARY_800: '#8C1213',
    SECONDARY_900: '#760F10',
    surface: {
      LIGHT_GRAY: '#EEF4F8',
      GRAY: ' #767676',
      DARK_GRAY: '#333333',
      LIGHT_GREEN: '#C3EFD5',
      WHITE: '#FFFFFF',
    },
    text: {
      PRIMARY: '#221E20',
      WHITE: '#FFFFFF',
      GRAY: '#767676',
      DARK_GRAY: '#333333',
      LIGHT_GRAY: '#AAAAAA',
    },
    border: {
      DARK_GRAY: '#595959',
      LIGHT_GRAY: ' #E5E5E5',
    },
    base: {
      margin: scale(20),
      padding: scale(20),
      radius: scale(5),
    },
  },
  heading: {
    h1: scale(48),
    h2: scale(36),
    h3: scale(28),
    h4: scale(24),
    h5: scale(22),
    h6: scale(20),
  },
  paragraph: {
    p1: scale(20),
    p2: scale(16),
    p3: scale(14),
    p4: scale(12),
    p5: scale(10),
    p6: scale(8),
  },
  lineHeight: {
    body: scale(20),
  },
} as const;
