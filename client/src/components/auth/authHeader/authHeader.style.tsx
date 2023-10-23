import { Dimensions, StyleSheet } from 'react-native';

const screenWidth = Dimensions.get('window').width;
export const styles = StyleSheet.create({
  header: {
    display: 'flex',
    alignContent: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: screenWidth / 2 + 10,
    marginTop: 20,
    marginBottom: 20,
  },
  headerButton: {
    padding: 10,
    backgroundColor: '#d5d4d8',
    borderRadius: 50,
  },
});
