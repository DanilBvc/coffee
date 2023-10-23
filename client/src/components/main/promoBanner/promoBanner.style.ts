import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    maxWidth: 300,
    borderRadius: 16,
    maxHeight: 140,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 26,
    marginBottom: 26,
  },
  banner: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    width: 315,
    height: 140,
  },
  titleContainer: {
    height: '100%',
    justifyContent: 'center',
    gap: 17,
  },
  promo: {
    backgroundColor: '#ED5151',
    color: '#fff',
    width: 60,
    textAlign: 'center',
    borderRadius: 8,
  },
  title: {
    fontSize: 32,
    color: '#fff',
  },
});
