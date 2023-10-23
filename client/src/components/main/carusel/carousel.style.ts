import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  carouselWrapper: {
    maxWidth: '100%',
    overflow: 'hidden',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: 15,
    paddingRight: 15,
  },
  carouselItem: {
    backgroundColor: '#F3F3F3',
    color: '#2F4B4E',
    borderRadius: 12,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 10,
    paddingBottom: 10,
  },
  activeItem: {
    color: '#fff',
    backgroundColor: '#C67C4E',
  },
});
