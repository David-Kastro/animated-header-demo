import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
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
});

export default styles;
