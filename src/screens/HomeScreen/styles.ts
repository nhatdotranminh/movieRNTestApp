import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    itemContainer: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    itemTitle: {
        fontSize: 18,
    },
    errorText: {
        marginTop: 10,
        color: 'red',
        textAlign: 'center',
        paddingHorizontal: 20,
    }
});

export default styles;
