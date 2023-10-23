import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginTop: 29,
    marginBottom: 20,
    borderBottomColor: '#EAEAEA',
    borderBottomWidth: 1,
  },
  img: {
    width: '100%',
    height: 200,
    borderRadius: 16,
  },
  title: {
    fontSize: 20,
    color: '#2F2D2C',
    fontWeight: 'bold',
    paddingBottom: 2,
    paddingTop: 20,
  },
  stars: {
    fontSize: 20,
    color: '#2F2D2C',
    fontWeight: 'bold',
  },
  description: {
    color: '#9B9B9B',
    fontSize: 12,
  },
  starsCount: {
    color: '#808080',
  },
  rating: {
    flexDirection: 'row',
    gap: 4,
    alignItems: 'center',
  },
  categories: {
    flexDirection: 'row',
    gap: 15,
  },
  descriptionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 18,
  },
  descriptionWrapper: {
    flexDirection: 'column',
    gap: 5,
  },
});
