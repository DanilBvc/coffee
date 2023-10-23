import { type ViewStyle } from 'react-native';

export interface visibleToggleType {
  style?: ViewStyle;
  isPasswordVisible: boolean;
  togglePasswordVisibility: () => void;
}
