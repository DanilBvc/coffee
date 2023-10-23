import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  topContainer: {
    flex: 1,
    backgroundColor: '#131313',
  },
  bottomContainer: {
    flex: 2,
    backgroundColor: '#F9F9F9',
  },
  children: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: 2,
    paddingHorizontal: 16,
  },
  sectionContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
