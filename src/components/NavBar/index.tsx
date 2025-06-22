import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome6';
import styles from "./styles";

interface Props {
    leftElement?: React.ReactNode;
    centerElement?: React.ReactNode;
    rightElement?: React.ReactNode;
    title?: string;
    customStyle?: any;
    customTextColor?: string;
}

const NavBar: React.FC<Props> = ({ leftElement, centerElement, rightElement, title, customStyle, customTextColor }) => {
    const navigation = useNavigation();
    return (
        <View style={[styles.container, customStyle]}>
            <View style={styles.leftContainer}>
                {leftElement ? leftElement : <TouchableOpacity onPress={() => navigation.goBack()}><Icon name="angle-left" size={20} color={customTextColor || '#000'} /></TouchableOpacity>}
            </View>
            <View style={styles.centerContainer}>
                {centerElement ? centerElement : <Text style={[styles.title, { color: customTextColor }]}>{title}</Text>}
            </View>
            <View style={styles.rightContainer}>
                {rightElement ? rightElement : null}
            </View>
        </View>
    );
};
export default NavBar;