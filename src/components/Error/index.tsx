import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/FontAwesome6";
import NavBar from "../NavBar";
import styles from "./styles";

const Error = ({ message }: { message?: string }) => {
  return (
    <SafeAreaView style={styles.container}>
      <NavBar title={``} customStyle={{ backgroundColor: '#00A9CE' }} customTextColor="#fff" />
      <View style={styles.bodyContainer}>
        <Icon name="film" size={60} color="#ccc" />
        <Text style={styles.text}><Text style={styles.boldText}>{"Error: "}</Text>{message || 'An unknown error occurred.'}</Text>
      </View>
    </SafeAreaView>
  )
}
export default Error