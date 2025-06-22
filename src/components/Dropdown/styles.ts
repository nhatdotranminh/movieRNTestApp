import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginBottom: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  headerOpen: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  labelText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000'
  },
  arrow: {
    fontSize: 16,
  },
  optionsContainer: {
    backgroundColor: '#fff',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  option: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: 'rgba(248, 248, 248, 1)',
    borderRadius: 5,
  },
  separator: {
    height: 10,
  },
  selectedOption: {
    backgroundColor: '#00B4D8',
  },
  optionText: {
    fontSize: 14,
    color: '#000',
    fontWeight: '400',
  },
  selectedOptionText: {
    color: '#fff',
  },
});

export default styles;
