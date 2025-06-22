import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useMemo } from 'react';
import { ActivityIndicator, FlatList, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome6';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../components/Header';
import NavBar from '../../components/NavBar';
import { imageBaseUrl } from '../../config/AppConfig';
import { RootStackParamList } from '../../navigation/AppStack';
import { fetchMovieCredits, fetchMovieDetail } from '../../redux/slices/movieSlice';
import { AppDispatch, RootState } from '../../redux/store';
import { Cast } from '../../types';
import styles from './styles';

type MovieDetailScreenRouteProp = RouteProp<RootStackParamList, 'MovieDetail'>;

const MovieDetailScreen = () => {
  const route = useRoute<MovieDetailScreenRouteProp>();
  const navigation = useNavigation();
  const dispatch = useDispatch<AppDispatch>();
  const { movieId } = route.params;

  const { detail: movie, detailStatus, error, credits } = useSelector((state: RootState) => state.movies);

  useEffect(() => {
    dispatch(fetchMovieDetail(movieId));
    dispatch(fetchMovieCredits(movieId));
  }, [dispatch, movieId]);

  const processedCrew = useMemo(() => {
    if (!credits?.crew) {
      return [];
    }
    const crewMap = new Map<string, { name: string; original_name: string; jobs: string[] }>();
    credits.crew.forEach(member => {
      const key = member.original_name;
      const existing = crewMap.get(key);
      if (existing) {
        existing.jobs.push(member.job);
      } else {
        crewMap.set(key, {
          name: member.name,
          original_name: member.original_name,
          jobs: [member.job],
        });
      }
    });
    return Array.from(crewMap.values());
  }, [credits]);

  const topBilledCast = useMemo(() => credits?.cast?.slice(0, 10) || [], [credits]);

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

  const releaseYear = new Date(movie.release_date).getFullYear();
  const runtimeHours = Math.floor(movie.runtime / 60);
  const runtimeMinutes = movie.runtime % 60;
  const progress = movie.vote_average


  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Header />

        <View style={styles.topContainer}>
          <NavBar title={`${movie.title} (${releaseYear})`} customStyle={{ backgroundColor: 'transparent' }} customTextColor="#fff" />
          <View style={styles.quickInfoContainer}>
            <Image source={{ uri: `${imageBaseUrl}${movie.poster_path}` }} style={styles.poster} />
            <View style={styles.headerTextContainer}>
              <Text style={styles.detailsText}>{`${new Date(movie.release_date).toLocaleDateString()}  • ${runtimeHours}h ${runtimeMinutes}m`}</Text>
              <Text style={styles.detailsText}>{movie.genres.map((g: { name: any; }) => g.name).join(', ')}</Text>
              <Text style={styles.detailsText}><Text style={styles.boldText}>Status:</Text> {movie.status}</Text>
              <Text style={styles.detailsText}><Text style={styles.boldText}>Original Language:</Text> {movie.spoken_languages.map((l: { english_name: any; }) => l.english_name).join(', ')}</Text>
            </View>
          </View>
        </View>

        <View style={styles.infoContainer}>
          <View style={styles.scoreContainer}>
            <View style={styles.circularProgressContainer}>
              <AnimatedCircularProgress
                size={50}
                width={4}
                fill={progress}
                tintColor="rgba(69, 255, 143, 1)"
                backgroundColor="rgba(208, 210, 211, 0.4)" >
                {
                  (fill: any) => (
                    <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
                      <Text style={styles.scoreText}>{Math.round(fill)}</Text>
                      <Text style={styles.scoreTextPercentage}>%</Text>
                    </View>
                  )
                }
              </AnimatedCircularProgress>
            </View>
            <Text style={styles.scoreLabel}>User Score</Text>
          </View>

          <View style={styles.crewContainer}>
            {processedCrew.map(person => (
              <View key={person.original_name} style={styles.crewMemberContainer}>
                <Text style={styles.crewName}>{person.name}</Text>
                <Text style={styles.crewText} numberOfLines={3}>{person.jobs.join(', ')}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.overviewContainer}>
          <Text style={styles.tagline}>{movie.tagline}</Text>
          <Text style={styles.overviewTitle}>Overview</Text>
          <Text style={styles.overviewText}>{movie.overview}</Text>
          <TouchableOpacity style={styles.watchlistButton}>
            <Icon name="bookmark" size={20} color="#fff" />
            <Text style={styles.watchlistButtonText}>Add To Watchlist</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.castContainer}>
          <Text style={styles.castTitle}>Top Billed Cast</Text>
          <FlatList
            data={topBilledCast}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }: { item: Cast }) => (
              <View style={styles.castCard}>
                {item.profile_path ? (
                  <Image
                    source={{ uri: `${imageBaseUrl}${item.profile_path}` }}
                    style={styles.castImage}
                  />
                ) : (
                  <View style={[styles.castImage, styles.placeholderImage]}>
                    <Icon name="user" size={60} color="#ccc" />
                  </View>
                )}
                <View style={styles.castInfo}>
                  <Text style={styles.castName} numberOfLines={2}>{item.original_name
                  }</Text>
                  <Text style={styles.castCharacter} numberOfLines={2}>{item.name}</Text>
                </View>
              </View>
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingLeft: 15 }}
          />
        </View>


      </ScrollView>
    </SafeAreaView>
  )
}

export default MovieDetailScreen;
