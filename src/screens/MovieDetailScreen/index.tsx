import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { ActivityIndicator, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../components/Header';
import NavBar from '../../components/NavBar';
import { imageBaseUrl } from '../../config/AppConfig';
import { RootStackParamList } from '../../navigation/AppStack';
import { fetchMovieDetail } from '../../redux/slices/movieSlice';
import { AppDispatch, RootState } from '../../redux/store';
import styles from './styles';

type MovieDetailScreenRouteProp = RouteProp<RootStackParamList, 'MovieDetail'>;

const MovieDetailScreen = () => {
  const route = useRoute<MovieDetailScreenRouteProp>();
  const navigation = useNavigation();
  const dispatch = useDispatch<AppDispatch>();
  const { movieId } = route.params;

  const { detail: movie, detailStatus, error } = useSelector((state: RootState) => state.movies);

  useEffect(() => {
    dispatch(fetchMovieDetail(movieId));
  }, [dispatch, movieId]);

  if (detailStatus === 'loading' || detailStatus === 'idle') {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (detailStatus === 'failed') {
    return (
      <View style={styles.loadingContainer}>
        <Text>Error: {error}</Text>
      </View>
    );
  }

  if (!movie) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Movie not found.</Text>
      </View>
    );
  }

  const director = movie.credits.crew.find(person => person.job === 'Director');
  const writers = movie.credits.crew.filter(person => person.job === 'Writer' || person.job === 'Screenplay');
  const releaseYear = new Date(movie.release_date).getFullYear();
  const runtimeHours = Math.floor(movie.runtime / 60);
  const runtimeMinutes = movie.runtime % 60;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Header />

        <View style={styles.topContainer}>
          <NavBar title={`${movie.title} (${releaseYear})`} customStyle={{ backgroundColor: 'transparent' }} customTextColor="#fff" />
          <View style={styles.quickInfoContainer}>
            <Image source={{ uri: `${imageBaseUrl}${movie.poster_path}` }} style={styles.poster} />
            <View style={styles.headerTextContainer}>
              <Text style={styles.detailsText}>{`${new Date(movie.release_date).toLocaleDateString()} (SG) • ${runtimeHours}h ${runtimeMinutes}m`}</Text>
              <Text style={styles.detailsText}>{movie.genres.map(g => g.name).join(', ')}</Text>
              <Text style={styles.detailsText}>Status: {movie.status}</Text>
              <Text style={styles.detailsText}>Original Language: {movie.original_language}</Text>
            </View>
          </View>
        </View>

        <View style={styles.infoContainer}>
          <View style={styles.crewContainer}>
            {director && <Text style={styles.crewText}><Text style={styles.crewName}>{director.name}</Text>, Director</Text>}
            {writers.map(writer => (
              <Text key={writer.name} style={styles.crewText}><Text style={styles.crewName}>{writer.name}</Text>, Writer</Text>
            ))}
          </View>
        </View>

        <View style={styles.overviewContainer}>
          <Text style={styles.tagline}>{movie.tagline}</Text>
          <Text style={styles.overviewTitle}>Overview</Text>
          <Text style={styles.overviewText}>{movie.overview}</Text>
        </View>

        <TouchableOpacity style={styles.watchlistButton}>
          <Text style={styles.watchlistButtonText}>Add To Watchlist</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  )
}

export default MovieDetailScreen;
