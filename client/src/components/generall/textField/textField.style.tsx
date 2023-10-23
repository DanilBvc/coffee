import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
  },
  title: {
    color: '#5c5c5c',
  },
  input: {
    borderRadius: 18,
    position: 'relative',
    backgroundColor: '#E6EDED',
    color: '#B4B9BB',
    width: '100%',
    paddingLeft: 10,
    height: 50,
  },
  errorText: {
    color: 'rgb(255, 68, 68)',
    position: 'absolute',
    bottom: -13,
  },
});
