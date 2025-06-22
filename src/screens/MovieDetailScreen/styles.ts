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
    paddingBottom: 35,
  },
  posterContainer: {
    alignItems: 'center',
    marginBottom: 15,
  },
  quickInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15,
    paddingBottom: 10,
    paddingTop: 35
  },
  poster: {
    width: 111,
    height: 145,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  headerTextContainer: {
    flex: 1,
    marginLeft: 15,
    gap: 5,
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
  quickInfoText: {
    color: '#fff',
    fontSize: 16,
    marginHorizontal: 5,
  },
  detailsText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '400',
    letterSpacing: 0.5,
    marginTop: 5,
  },
  boldText: {
    fontWeight: 'bold',
  },
  infoContainer: {
    paddingHorizontal: 15,
    paddingBottom: 15,
    paddingTop: 35,
    backgroundColor: '#00B4D8',
    flexDirection: 'row',
  },
  scoreContainer: {
    alignItems: 'flex-start',
    flex: 1
  },

  scoreLabel: {
    color: '#fff',
    fontSize: 18,
    marginTop: 10,
    fontWeight: 'bold',
  },
  crewContainer: {
    flex: 1,
    gap: 10
  },
  crewMemberContainer: {
    marginBottom: 12,
  },
  crewName: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    letterSpacing: 0.5,
  },
  crewText: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: 14,
  },
  overviewContainer: {
    paddingHorizontal: 15,
    paddingTop: 15,
    paddingBottom: 35,
    backgroundColor: '#00B4D8',
  },
  tagline: {
    color: '#fff',
    fontStyle: 'italic',
    fontSize: 16,
    marginBottom: 10,
  },
  overviewTitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  overviewText: {
    color: '#fff',
    fontSize: 16,
    marginTop: 5,
  },
  watchlistButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    paddingVertical: 8,
    marginTop: 35,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    width: 211
  },
  watchlistButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 10,
    fontSize: 18,
  },
  castContainer: {
    marginTop: 20,
  },
  castTitle: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    paddingHorizontal: 15,
  },
  castCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    width: 140,
    marginRight: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 15,
  },
  castImage: {
    width: 140,
    height: 175,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  placeholderImage: {
    backgroundColor: '#e1e1e1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  castInfo: {
    padding: 10,
    height: 80,
  },
  castName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  castCharacter: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  circularProgressContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#042541',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scoreText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  scoreTextPercentage: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
    marginLeft: 2,
    marginTop: 2,
  },
  certificationContainer: {
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.6)',
    borderRadius: 4,
    paddingHorizontal: 6,
    paddingVertical: 2,
    marginRight: 10,
  },
  certificationText: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: 14,
    fontWeight: '600',
  }
});

export default styles;
