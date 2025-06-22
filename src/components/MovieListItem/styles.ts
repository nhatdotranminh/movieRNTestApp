import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignItems: 'center',
    paddingRight: 20
  },
  poster: {
    width: 100,
    height: 150,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  detailsContainer: {
    flex: 1,
    marginLeft: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  releaseDate: {
    fontSize: 14,
    color: '#999',
    marginTop: 5,
  },
  overview: {
    fontSize: 14,
    marginTop: 20,
  },
  removeButton: {
    position: 'absolute',
    top: 15,
    right: 15,
  },
});

export default styles;
