import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  modalContainer: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'space-around'
  },
  modalTextContainer: {
    maxWidth: 300
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  text: {
    fontWeight: 'normal',
    fontSize: 18,
    lineHeight: 32
  },
  img: {
    width: 300,
    height: 300
  },
  button: {
    fontSize: 30,
    color: '#FDFDFD',
    backgroundColor: '#95D0A9'
  }
})
