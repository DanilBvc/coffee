import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 20,
    maxWidth: 350,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: 17,
    flex: 1,
  },
  buttonsContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 5,
  },
  text: {
    color: '#fff',
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  blurText: {
    color: '#A9A9A9',
    fontSize: 16,
    textAlign: 'center',
  },
  button: {
    color: '#000000',
    borderRadius: 10,
    backgroundColor: '#fff',
    width: '30%',
    height: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
