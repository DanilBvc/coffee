import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  modalView: {
    margin: 20,
    width: '90%',
    height: '90%',
    backgroundColor: 'white',
    borderRadius: 20,
    paddingBottom: 35,
    paddingTop: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    position: 'relative',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cross: {
    position: 'absolute',
    right: 10,
    top: 10,
  },
  childrenContainer: {},
});
