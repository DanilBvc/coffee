import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  search: {
    backgroundColor: '#313131',
    borderRadius: 15,
    padding: 5,
  },
  searchContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  searchInput: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingLeft: 15,
  },
  input: {
    color: '#989898',
  },
  filterIcon: {
    padding: 12,
    backgroundColor: '#C67C4E',
    borderRadius: 12,
  },
});
