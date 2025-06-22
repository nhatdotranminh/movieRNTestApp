import { useFocusEffect, useNavigation } from '@react-navigation/native';
import React, { useMemo, useState } from 'react';
import { LayoutAnimation, NativeScrollEvent, NativeSyntheticEvent, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome6';
import Header from '../../components/Header';
import MovieListItem from '../../components/MovieListItem';
import NavBar from '../../components/NavBar';
import { getWatchlist, updateWatchList } from '../../helper/watchListHelper';
import { Movie } from '../../types';
import { sortOptions } from './constant';
import EmptyWatchList from './EmptyWatchList';
import styles from './styles';

const WatchlistScreen = () => {
  const navigation = useNavigation<any>();
  const [movies, setMovies] = useState<Movie[]>([]);
  const [sortBy, setSortBy] = useState('release_date');
  const [sortOrder, setSortOrder] = useState('desc');
  const [isHeaderHidden, setIsHeaderHidden] = useState(false);

  const _getMovies = async () => {
    const _movies = await getWatchlist();
    setMovies(_movies);
  }
  const removeMovie = (movieId: number) => {
    const updatedMovies = movies.filter(movie => movie.id !== movieId);
    setMovies(updatedMovies);
    updateWatchList(updatedMovies)
  }

  useFocusEffect(
    React.useCallback(() => {
      _getMovies();
    }, [])
  );

  const sortedMovies = useMemo(() => {
    const sorted = [...movies].sort((a, b) => {
      if (sortBy === 'release_date') {
        return new Date(b.release_date).getTime() - new Date(a.release_date).getTime();
      } else if (sortBy === 'vote_average') {
        return b.vote_average - a.vote_average;
      } else {
        return a.title.localeCompare(b.title);
      }
    });

    if (sortOrder === 'desc') {
      return sorted;
    } else {
      return sorted.reverse();
    }
  }, [movies, sortBy, sortOrder]);

  const onPressMovie = (movieId: number) => {
    navigation.navigate('MovieDetail', { movieId });
  }
  const renderMovieList = () => {
    return (
      <View style={styles.movieListContainer}>
        {sortedMovies.map((movie) => (
          <MovieListItem
            key={movie.id}
            movie={movie}
            showRemoveButton
            removeMovie={removeMovie}
            onPress={onPressMovie}
          />
        ))}
      </View>
    )
  }
  const renderProfile = () => {
    return (
      <View style={styles.profileSectionContainer}>
        <View style={styles.profileContainer}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>N</Text>
          </View>
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>Nhat Do</Text>
            <Text style={styles.profileDate}>Member since June 2025</Text>
          </View>
        </View>
      </View>
    )
  }
  const renderFilter = () => {
    return (
      <View style={styles.watchlistControlsContainer}>
        {isHeaderHidden ? null : <Text style={styles.watchlistTitle}>My Watchlist</Text>}
        <View style={styles.filterContainer}>
          <View style={styles.filterByContainer}>
            <Text style={styles.filterLabel}>Filter by:</Text>
            <Dropdown
              style={styles.dropdown}
              containerStyle={styles.dropdownContainer}
              itemTextStyle={styles.dropdownItemText}
              selectedTextStyle={styles.dropdownSelectedText}
              data={sortOptions}
              labelField="label"
              valueField="value"
              value={sortBy}
              onChange={item => {
                setSortBy(item.value);
              }}
              renderRightIcon={() => (
                <Icon name="chevron-down" size={14} color="#01b4e4" />
              )}
            />
          </View>
          <TouchableOpacity style={styles.orderButton} onPress={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}>
            <Text style={styles.filterLabel}>Order:</Text>
            <Icon name={sortOrder === 'asc' ? 'arrow-down' : 'arrow-up'} size={16} color="#01b4e4" style={{ marginLeft: 5 }} />
          </TouchableOpacity>
        </View>
      </View>
    )
  }
  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const _isHeaderHidden = event.nativeEvent.contentOffset.y > 100;
    if (_isHeaderHidden !== isHeaderHidden) {
      setIsHeaderHidden(_isHeaderHidden);
      LayoutAnimation.easeInEaseOut();
    }
  }
  const renderBody = () => {
    if (movies.length === 0) {
      return (
        <>
          {renderProfile()}
          <EmptyWatchList />
        </>
      )
    }
    return (
      <ScrollView
        stickyHeaderIndices={[1]}
        contentContainerStyle={styles.scrollViewContentContainer}
        onScroll={onScroll}
        scrollEventThrottle={16}
      >
        {renderProfile()}
        {renderFilter()}
        {renderMovieList()}
      </ScrollView>
    )
  }
  return (
    <SafeAreaView style={[styles.container, isHeaderHidden ? { backgroundColor: '#0d253f' } : { backgroundColor: '#fff' }]} edges={['top']}>
      {!isHeaderHidden ? <Header /> : null}
      <NavBar title={!isHeaderHidden ? "" : "My Watchlist"} customStyle={{ backgroundColor: '#0d253f' }} customTextColor="#fff" />
      {renderBody()}
    </SafeAreaView>
  );
};

export default WatchlistScreen;
