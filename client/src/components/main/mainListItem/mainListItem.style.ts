import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  img: {
    width: 144,
    height: 144,
    position: 'relative',
    borderRadius: 16,
  },
  starsWrapper: {
    position: 'absolute',
    top: 10,
    left: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  bottomContainer: {
    display: 'flex',
    alignItems: 'flex-start',
    paddingLeft: 5,
  },
  bottomControl: {
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  starStatistic: {
    color: '#fff',
    fontWeight: 'bold',
  },
  wrapper: {
    flexDirection: 'column',
    justifyContent: 'center',
    paddingBottom: 5,
    paddingRight: 5,
    paddingTop: 5,
    paddingLeft: 5,
    maxWidth: 155,
    backgroundColor: '#fff',
    margin: 3,
    borderRadius: 16,
  },
  priceText: {
    color: '#2F4B4E',
    fontWeight: 'bold',
    fontSize: 18,
  },
  descriptionText: {
    color: '#9B9B9B',
    fontWeight: '300',
  },
  titleText: {
    color: '#2F2D2C',
    fontWeight: '500',
    fontSize: 18,
  },
});
