import { type ReactNode } from 'react';
import { type ViewStyle } from 'react-native';

export interface BaseLayoutType {
  children: ReactNode;
  style?: ViewStyle;
}
