import { type ReactNode } from 'react';
import { type ViewStyle } from 'react-native';

export interface mainLayoutType {
  children: ReactNode;
  style?: ViewStyle;
  background?: boolean
}
