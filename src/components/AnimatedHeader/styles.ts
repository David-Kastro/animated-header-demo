import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  flexView: {
    flex: 1,
  },
  container: {
    backgroundColor: '#fff',
    flex: 1,
    paddingHorizontal: 10,
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
    shadowRadius: 0,
    backgroundColor: '#fff',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    zIndex: 9,
  },
  headerTitle: {
    fontWeight: '700',
    color: '#000',
  },
  title: {
    marginTop: 10,
    fontSize: 28,
    fontWeight: '700',
    color: '#000',
  },
  content: {
    marginTop: 20,
    flex: 1,
  },
});

export default styles;
