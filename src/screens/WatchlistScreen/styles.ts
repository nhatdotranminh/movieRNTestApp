import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollViewContentContainer: {
    paddingBottom: 20,
    backgroundColor: '#fff',
  },
  profileSectionContainer: {
    backgroundColor: '#0d253f',
    paddingTop: 5,
    paddingBottom: 30
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#8e44ad',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  avatarText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  profileInfo: {},
  profileName: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  profileDate: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 14,
  },
  watchlistControlsContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#fff',
  },
  watchlistTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  filterByContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dropdown: {
    width: 150,
    marginLeft: 5,
    borderBottomWidth: 2,
    borderBottomColor: '#01b4e4',
  },
  dropdownContainer: {
    borderRadius: 8,
  },
  dropdownItemText: {
    fontSize: 16,
    color: 'black',
  },
  dropdownSelectedText: {
    fontSize: 16,
    color: '#01b4e4',
    fontWeight: 'bold',
    paddingHorizontal: 5,
  },
  filterLabel: {
    fontSize: 16,
    color: '#888',
  },
  orderButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  movieListContainer: {
    paddingHorizontal: 20,
    gap: 10
  },
  emptyContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1
  },
  emptyText: {
    fontSize: 16,
    color: '#000',
    textAlign: 'center',
    marginTop: 20,
    opacity: 0.5,
  }
});

export default styles;
