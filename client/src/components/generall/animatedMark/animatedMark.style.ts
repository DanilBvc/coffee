import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  button: {
    minWidth: 20,
    minHeight: 20,
    width: 32,
    height: 32,
    backgroundColor: '#C67C4E',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderColor: 'transparent',
    position: 'relative',
  },
  firstLine: {
    width: 1,
    height: 8,
    backgroundColor: '#fff',
    position: 'absolute',
  },

  secondLine: {
    width: 1,
    height: 8,
    backgroundColor: '#fff',
    transform: 'rotate(90deg)',
    position: 'absolute',
  },
});
