import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    headerContainer: {

    },
    emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
    },

    emptyText: {
        fontSize: 16,
        color: '#000',
        marginTop: 16,
        fontWeight: 'bold',
        opacity: 0.5,
    },
    listContainer: {
        paddingHorizontal: 20,
    },
    filterButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 15,
        marginHorizontal: 20,
        borderRadius: 10,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    filterButtonText: {
        fontSize: 16,
    },
    searchInput: {
        backgroundColor: '#fff',
        padding: 15,
        marginHorizontal: 20,
        borderRadius: 10,
        fontSize: 16,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    searchButton: {
        backgroundColor: '#e4e4e4',
        padding: 15,
        marginHorizontal: 20,
        borderRadius: 30,
        alignItems: 'center',
        marginBottom: 45,
        height: 50,
    },
    searchButtonText: {
        fontSize: 14,
        color: 'rgba(0, 0, 0, 0.5)',
        fontWeight: '600',
    },
    errorText: {
        marginTop: 10,
        color: 'red',
        textAlign: 'center',
        paddingHorizontal: 20,
        fontWeight: 'bold',
        fontSize: 16,
    },
    errorText2: {
        marginTop: 10,
        color: '000',
        textAlign: 'center',
        paddingHorizontal: 20,
        fontWeight: 'bold',
        fontSize: 14,
        opacity: 0.5,
    },
    loadingIndicator: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 100,
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    separator: {
        height: 10,
    },
});

export default styles;
