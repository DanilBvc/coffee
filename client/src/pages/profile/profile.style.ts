import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20,
    justifyContent: 'center',
  },
  wrapper: {
    alignItems: 'center',
  },
  text: { textAlign: 'center' },
  penContainer: {
    position: 'absolute',
    top: 30,
    left: '55%',
  },
  avatar: { position: 'relative', maxWidth: 44, maxHeight: 44 },
});
