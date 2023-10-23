import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  layout: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
  },
  button: {
    backgroundColor: '#719b8e',
    width: '100%',
    paddingBottom: 20,
    paddingTop: 20,
    borderRadius: 30,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  signButton: {
    display: 'flex',
    gap: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 30,
    paddingTop: 10,
    paddingBottom: 10,
  },
  centerText: {
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    flexDirection: 'row',
  },
  redText: {
    color: 'red',
  },
  whiteText: {
    color: '#fff',
  },
  greenText: {
    color: '#719b8e',
  },
  marginTop: {
    marginTop: 20,
  },
});
