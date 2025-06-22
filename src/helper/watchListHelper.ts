import AsyncStorage from "@react-native-async-storage/async-storage";

const key = 'watchlist'

const getWatchlist = async () => {
    const watchlist = await AsyncStorage.getItem(key);
    if (!watchlist) {
        return [];
    }
    return JSON.parse(watchlist);
}

const addToWatchlist = async (movie: any) => {
    const watchlist = await getWatchlist();
    watchlist.push(movie);
    await AsyncStorage.setItem(key, JSON.stringify(watchlist));
}

const removeFromWatchlist = async (movie: any) => {
    const watchlist = await getWatchlist();
    const updatedWatchlist = watchlist.filter((m: any) => m.id !== movie.id);
    await AsyncStorage.setItem(key, JSON.stringify(updatedWatchlist));
}
const checkIfInWatchlist = async (movie: any) => {
    const watchlist = await getWatchlist();
    return watchlist.some((m: any) => m.id === movie.id);
}
const updateWatchList = async (movies: any) => {
    await AsyncStorage.setItem(key, JSON.stringify(movies));
}
const toggleWatchlist = async (movie: any) => {
    const isInWatchlist = await checkIfInWatchlist(movie);
    if (isInWatchlist) {
        await removeFromWatchlist(movie);
    } else {
        await addToWatchlist(movie);
    }
}

export { addToWatchlist, checkIfInWatchlist, getWatchlist, removeFromWatchlist, toggleWatchlist, updateWatchList };

