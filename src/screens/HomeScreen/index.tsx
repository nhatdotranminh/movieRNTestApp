import React, { useEffect } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from '../../redux/slices/movieSlice';
import { AppDispatch, RootState } from '../../redux/store';
import styles from './styles';

const HomeScreen = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { list: movies, status, error } = useSelector((state: RootState) => state.movies);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchMovies());
        }
    }, [status, dispatch]);

    if (status === 'loading') {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" />
            </View>
        );
    }

    if (status === 'failed') {
        return (
            <View style={styles.container}>
                <Text>Error: {error}</Text>
                <Text style={styles.errorText}>
                    {"Can't load data, please try again later"}
                </Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={movies}
                keyExtractor={(item: any) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.itemContainer}>
                        <Text style={styles.itemTitle}>{item.title}</Text>
                    </View>
                )}
            />
        </View>
    );
};



export default HomeScreen;
