import { type StyleProp, type ViewStyle } from 'react-native';

export interface buttonType {
  onPress: () => void;
  title: string;
  additionalStyles?: StyleProp<ViewStyle>;
  active?: boolean;
}
