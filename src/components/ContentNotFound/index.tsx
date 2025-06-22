import { SafeAreaView, Text, View } from "react-native"
import Icon from "react-native-vector-icons/FontAwesome6"
import NavBar from "../NavBar"
import styles from "./styles"
const ContentNotFound = () => {
    return (
        <SafeAreaView style={styles.container}>
            <NavBar title={`Not Found`} customStyle={{ backgroundColor: '#00A9CE' }} customTextColor="#fff" />
            <View style={styles.loadingContainer}>
                <Icon name="film" size={60} color="#ccc" />
                <Text style={styles.notFoundText}>Content not found</Text>
            </View>
        </SafeAreaView>
    )
}
export default ContentNotFound
