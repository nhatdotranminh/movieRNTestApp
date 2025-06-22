import { ActivityIndicator, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import NavBar from "../NavBar";
import styles from "./styles";

const Loading = () => {
    return (
        <SafeAreaView style={styles.container}>
            <NavBar title={``} customStyle={{ backgroundColor: '#00A9CE' }} customTextColor="#fff" />
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" />
            </View>
        </SafeAreaView>
    );
}
export default Loading
