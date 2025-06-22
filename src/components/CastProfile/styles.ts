import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    castCard: {
        backgroundColor: '#fff',
        borderRadius: 8,
        width: 140,
        marginRight: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginBottom: 15,
    },
    castImage: {
        width: 140,
        height: 175,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
    },
    placeholderImage: {
        backgroundColor: '#e1e1e1',
        justifyContent: 'center',
        alignItems: 'center',
    },
    castInfo: {
        padding: 10,
        height: 80,
    },
    castName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
    },
    castCharacter: {
        fontSize: 14,
        color: '#666',
        marginTop: 2,
    },
})
export default styles