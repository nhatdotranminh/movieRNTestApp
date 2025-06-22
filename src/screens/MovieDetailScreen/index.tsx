import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import React, { Suspense, lazy, useEffect, useMemo, useState } from 'react';
import { FlatList, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome6';
import { useDispatch, useSelector } from 'react-redux';
import CastProfile from '../../components/CastProfile';
import Header from '../../components/Header';
import Loading from '../../components/Loading';
import NavBar from '../../components/NavBar';
import { imageBaseUrl } from '../../config/AppConfig';
import { checkIfInWatchlist, toggleWatchlist } from '../../helper/watchListHelper';
import { RootStackParamList } from '../../navigation/AppStack';
import { fetchMovieCredits, fetchMovieDetail } from '../../redux/slices/movieSlice';
import { AppDispatch, RootState } from '../../redux/store';
import { Cast } from '../../types';
import styles from './styles';
const Error = lazy(() => import('../../components/Error'));
const ContentNotFound = lazy(() => import('../../components/ContentNotFound'));


type MovieDetailScreenRouteProp = RouteProp<RootStackParamList, 'MovieDetail'>;

const MovieDetailScreen = () => {
  const route = useRoute<MovieDetailScreenRouteProp>();
  const navigation = useNavigation();
  const dispatch = useDispatch<AppDispatch>();
  const { movieId } = route.params;
  const { detail: movie, detailStatus, error, credits } = useSelector((state: RootState) => state.movies);
  const [isInWatchlist, setIsInWatchlist] = useState(false)

  useEffect(() => {
    dispatch(fetchMovieDetail(movieId));
    dispatch(fetchMovieCredits(movieId));
  }, [dispatch, movieId]);
  const _checkIfInWatchlist = async () => {
    const isInWatchlist = await checkIfInWatchlist(movie);
    setIsInWatchlist(isInWatchlist);
  }
  useEffect(() => {
    _checkIfInWatchlist();
  }, [movie]);
  const processedCrew = useMemo(() => {
    if (!credits?.crew) {
      return [];
    }
    const crewMap = new Map<string, { name: string; original_name: string; jobs: string[] }>();
    credits.crew.forEach(member => {
      const key = member.original_name;
      const existing = crewMap.get(key);
      if (member.job === 'Director' || member.job === 'Writer') {
        if (existing) {
          existing.jobs.push(member.job);
        } else {
          crewMap.set(key, {
            name: member.name,
            original_name: member.original_name,
            jobs: [member.job],
          });
        }
      }
    });
    return Array.from(crewMap.values());
  }, [credits]);

  const topBilledCast = useMemo(() => credits?.cast?.slice(0, 10) || [], [credits]);

  if (detailStatus === 'loading' || detailStatus === 'idle') {
    return (
      <Loading />
    );
  }
  if (detailStatus === 'failed') {
    return (
      <Suspense
        fallback={
          <Loading />
        }>
        <Error message={error || 'An unknown error occurred.'} />
      </Suspense>
    );
  }

  if (!movie) {
    return (
      <Suspense
        fallback={
          <Loading />
        }>
        <ContentNotFound />
      </Suspense>
    );
  }

  const certificate = movie?.release_dates?.results?.[0]?.release_dates?.[0]?.certification;
  const releaseYear = new Date(movie.release_date).getFullYear();
  const runtimeHours = Math.floor(movie.runtime / 60);
  const runtimeMinutes = movie.runtime % 60;
  const progress = movie.vote_average

  const onPressWatchlist = () => {
    const params = {
      adult: movie.adult,
      backdrop_path: movie.backdrop_path,
      genre_ids: movie.genre_ids,
      id: movie.id,
      original_language: movie.original_language,
      original_title: movie.original_title,
      overview: movie.overview,
      popularity: movie.popularity,
      poster_path: movie.poster_path,
      release_date: movie.release_date,
      title: movie.title,
      video: movie.video,
      vote_average: movie.vote_average,
      vote_count: movie.vote_count,
    }
    setIsInWatchlist(prev => !prev);
    toggleWatchlist(params);
  };
  const renderCastProfile = ({ item }: { item: Cast }) => {
    return (
      <CastProfile item={item} />
    )
  }
  const renderBody = () => {
    return (
      <>
        <View style={styles.topContainer}>
          <View style={styles.quickInfoContainer}>
            <Image source={{ uri: `${imageBaseUrl}${movie.poster_path}` }} style={styles.poster} />
            <View style={styles.headerTextContainer}>
              {certificate ? <View style={styles.certificateContainer}>
                <Text style={styles.certificationText}>{certificate}</Text>
              </View> : null}
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
          <TouchableOpacity style={styles.watchlistButton} onPress={onPressWatchlist}>
            <Icon name="bookmark" size={20} color="#fff" />
            <Text style={styles.watchlistButtonText}>{isInWatchlist ? 'Remove from Watchlist' : 'Add to Watchlist'}</Text>
          </TouchableOpacity>
        </View>

        {topBilledCast.length > 0 ? <View style={styles.castContainer}>
          <Text style={styles.castTitle}>Top Billed Cast</Text>
          <FlatList
            data={topBilledCast}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderCastProfile}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingLeft: 15 }}
          />
        </View> : null}
      </>
    )
  }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView stickyHeaderIndices={[1]}>
        <Header />
        <NavBar title={`${movie.title} ${releaseYear ? `(${releaseYear})` : ''}`} customStyle={{ backgroundColor: '#00A9CE' }} customTextColor="#fff" />
        {renderBody()}
      </ScrollView>
    </SafeAreaView>
  )
}

export default MovieDetailScreen;
