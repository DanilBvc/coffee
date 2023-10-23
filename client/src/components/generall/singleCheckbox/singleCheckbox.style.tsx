import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  circle: {
    width: 15,
    height: 15,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  innerCircle: {
    width: 7,
    height: 7,
    borderRadius: 10,
    backgroundColor: 'green',
  },
  selected: {
    borderColor: 'black',
  },
});
