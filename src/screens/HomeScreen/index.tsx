import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, LayoutAnimation, NativeScrollEvent, NativeSyntheticEvent, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome6';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../components/Header';
import MovieListItem from '../../components/MovieListItem';
import { RootStackParamList } from '../../navigation/AppStack';
import { fetchMovies, setCategory, setSortBy } from '../../redux/slices/movieSlice';
import { AppDispatch, RootState } from '../../redux/store';
import FilterOptions from './FilterOptions';
import styles from './styles';

const HomeScreen = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const dispatch = useDispatch<AppDispatch>();
    const { list: movies, status, error, page, canLoadMore, category, sortBy, keywordId }
        = useSelector((state: RootState) => state.movies);
    const [searchQuery, setSearchQuery] = useState('');
    const [isShowFilter, setIsShowFilter] = useState(true);
    // On mount, restore category and sortBy from AsyncStorage
    useEffect(() => {
        (async () => {
            const storedCategory = await AsyncStorage.getItem('category');
            const storedSortBy = await AsyncStorage.getItem('sortBy');
            dispatch(fetchMovies({ category: storedCategory || 'popular', sortBy: storedSortBy || 'popularity.desc', page: 1 }));
            if (storedCategory) dispatch(setCategory(storedCategory));
            if (storedSortBy) dispatch(setSortBy(storedSortBy));
        })();
    }, []);

    const handleSearch = useCallback(() => {
        AsyncStorage.setItem('category', category);
        AsyncStorage.setItem('sortBy', sortBy);
        dispatch(fetchMovies({ category, sortBy, page: 1, searchTerms: searchQuery }));
    }, [category, sortBy, searchQuery]);

    const updateCategory = (category: string) => {
        dispatch(setCategory(category));
    }
    const updateSortBy = (sortBy: string) => {
        dispatch(setSortBy(sortBy));
    }

    const handleLoadMore = useCallback(() => {
        if (canLoadMore && status !== 'loading') {
            dispatch(fetchMovies({ category, sortBy, page: page + 1, keywordId }));
        }
    }, [canLoadMore, status, category, sortBy, keywordId, page]);

    const renderHeader = useCallback(() => {
        return (
            <FilterOptions
                category={category}
                sortBy={sortBy}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                updateCategory={updateCategory}
                updateSortBy={updateSortBy}
                handleSearch={handleSearch}
            />
        )
    }, [category, sortBy, searchQuery]);

    const renderFooter = useCallback(() => {
        if (status === 'loading') {
            return <View style={styles.loadingIndicator}><ActivityIndicator size="large" /></View>;
        }
        if (status === 'failed') {
            return (
                <View style={styles.loadingContainer}>
                    <Text>Error: {error}</Text>
                    <Text style={styles.errorText}>{"Can't load data, please try again later"}</Text>
                </View>
            );
        }
        if (movies.length === 0 && status === 'succeeded') {
            return (
                <View style={styles.emptyContainer}>
                    <Icon name="database" size={20} color="#000" />
                    <Text style={styles.emptyText}>No data found</Text>
                </View>
            );
        }
        return null;
    }, [status, error, movies.length]);

    const renderItem = ({ item }: { item: any }) => (
        <MovieListItem movie={item} onPress={() => navigation.navigate('MovieDetail', { movieId: item.id })} />
    )

    const onScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
        const { contentOffset } = e.nativeEvent;
        const isScrollUp = contentOffset.y > 0
        if (!isScrollUp) {
            LayoutAnimation.easeInEaseOut();
            setIsShowFilter(true);
        } else {
            LayoutAnimation.easeInEaseOut();
            setIsShowFilter(false);
        }
    };

    return (
        <SafeAreaView style={styles.container} edges={['right', 'top', 'left']}>
            <Header />
            {isShowFilter && renderHeader()}
            <FlatList
                data={movies}
                keyExtractor={(item: any) => `${item.id}`}
                renderItem={renderItem}
                onScroll={onScroll}
                scrollEventThrottle={16}
                ListFooterComponent={renderFooter}
                onEndReached={handleLoadMore}
                onEndReachedThreshold={0.5}
                ItemSeparatorComponent={() => <View style={styles.separator} />}
                initialNumToRender={10}
            />
        </SafeAreaView>
    );
};

export default HomeScreen;
