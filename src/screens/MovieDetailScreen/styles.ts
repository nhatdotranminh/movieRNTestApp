import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  topContainer: {
    paddingTop: 15,
    backgroundColor: '#00A9CE',
  },
  quickInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
  },
  poster: {
    width: 100,
    height: 150,
    borderRadius: 10,
  },
  headerTextContainer: {
    flex: 1,
    marginLeft: 15,
  },
  backButton: {
    position: 'absolute',
    top: -5,
    left: -10,
    zIndex: 1,
  },
  backButtonText: {
    color: '#fff',
    fontSize: 30,
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 25,
  },
  detailsText: {
    color: '#fff',
    fontSize: 12,
    marginTop: 5,
  },
  infoContainer: {
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1DC1F0',
  },
  scoreContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60,
    borderRadius: 30,
    borderColor: '#fff',
    borderWidth: 2,
  },
  score: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  scoreLabel: {
    color: '#fff',
    fontSize: 12,
  },
  crewContainer: {
    marginLeft: 15,
  },
  crewText: {
    color: '#fff',
    fontSize: 14,
  },
  crewName: {
    fontWeight: 'bold',
  },
  overviewContainer: {
    padding: 15,
  },
  tagline: {
    color: '#fff',
    fontStyle: 'italic',
    fontSize: 16,
    marginBottom: 10,
  },
  overviewTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  overviewText: {
    color: '#fff',
    fontSize: 14,
    marginTop: 5,
  },
  watchlistButton: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    margin: 15,
    alignItems: 'center',
  },
  watchlistButtonText: {
    color: '#00B4D8',
    fontWeight: 'bold',
  },
});

export default styles;
