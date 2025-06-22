import { Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome6";
import styles from "./styles";

const EmptyWatchList = () => {
    return (
        <View style={styles.emptyContainer}>
            <Icon name="bookmark" size={60} color="#ccc" />
            <Text style={styles.emptyText}>No movies in watchlist</Text>
        </View>
    )
}
export default EmptyWatchList
