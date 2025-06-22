// A non-breaking change to trigger a re-evaluation
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { Movie } from '../../types';
import styles from './styles';

interface Props {
  movie: Movie;
  onPress: () => void;
}

const MovieListItem: React.FC<Props> = ({ movie, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }} style={styles.poster} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{movie.title}</Text>
        <Text style={styles.releaseDate}>{movie.release_date}</Text>
        <Text numberOfLines={2} style={styles.overview}>{movie.overview}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default MovieListItem;
