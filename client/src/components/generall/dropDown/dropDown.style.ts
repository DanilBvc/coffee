import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  dropDown: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    position: 'relative',
  },
  dropDownList: {
    fontSize: 18,
    color: '#fff',
  },
  dropDownContainer: {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    top: 25,
    left: 0,
    zIndex: 2,
    backgroundColor: '#131313',
    width: '100%',
  },
  dropDownCurrentValue: {
    color: '#fff',
    fontSize: 18,
    paddingRight: 5,
  },
  dropDownTitle: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  arrowIcon: {
    width: 14,
    height: 14,
    transform: 'rotate(180deg)',
  },
  rotatedArrow: {
    transform: 'rotate(0deg)',
  },
});
