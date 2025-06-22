import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        paddingHorizontal: 15,
        paddingTop: 15,
        paddingBottom: 15,
    },
    leftContainer: {
        width: '10%',
    },
    centerContainer: {
        width: '80%',
    },
    rightContainer: {
        width: '10%',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#000',
    },
    backIcon: {
        fontSize: 20,
        color: '#000',
    },

});

export default styles;
