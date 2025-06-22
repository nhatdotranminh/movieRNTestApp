// A non-breaking change to trigger a re-evaluation
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';
import { imageBaseUrl } from '../../config/AppConfig';
import { Movie } from '../../types';
import styles from './styles';

interface Props {
  movie: Movie;
  onPress: (movieId: number) => void;
  showRemoveButton?: boolean;
  removeMovie?: (movieId: number) => void;
}

const MovieListItem: React.FC<Props> = ({ movie, onPress, showRemoveButton, removeMovie }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => onPress(movie.id)}>
      <Image source={{ uri: `${imageBaseUrl}${movie.poster_path}` }} style={styles.poster} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{movie.title}</Text>
        <Text style={styles.releaseDate}>{movie.release_date}</Text>
        <Text numberOfLines={2} style={styles.overview}>{movie.overview}</Text>
      </View>
      {showRemoveButton && (
        <TouchableOpacity style={styles.removeButton} onPress={() => removeMovie?.(movie.id)}>
          <Icon name="x" size={10} color="#000" />
        </TouchableOpacity>
      )}
    </TouchableOpacity>
  );
};

export default MovieListItem;
