import debounce from 'lodash/debounce';
import React, { useCallback } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import Dropdown from '../../components/Dropdown';
import { categoryOptions, sortOptions } from "./constants";
import styles from "./styles";

interface FilterOptionsProps {
    category: string;
    sortBy: string;
    searchQuery: string;
    setSearchQuery: (searchQuery: string) => void;
    updateCategory: (category: string) => void;
    updateSortBy: (sortBy: string) => void;
    handleSearch: (searchQuery: string) => void;
    loading: boolean;
}

const FilterOptions = React.memo<FilterOptionsProps>(({
    category,
    sortBy,
    searchQuery,
    setSearchQuery,
    updateCategory,
    updateSortBy,
    handleSearch,
    loading,
}) => {

    const debouncedSearch = useCallback(
        debounce(() => {
            handleSearch(searchQuery);
        }, 500),
        [searchQuery, handleSearch]
    );

    return (
        <View style={styles.headerContainer}>
            <Dropdown
                label="Category"
                options={categoryOptions}
                selectedValue={category}
                onSelect={updateCategory}
            />
            <Dropdown
                label="Sort by"
                options={sortOptions}
                selectedValue={sortBy}
                onSelect={updateSortBy}
            />
            <TextInput
                style={styles.searchInput}
                placeholder="Search..."
                value={searchQuery}
                onChangeText={setSearchQuery}
            />
            <TouchableOpacity disabled={loading} style={styles.searchButton} onPress={debouncedSearch}>
                <Text style={styles.searchButtonText}>Search</Text>
            </TouchableOpacity>
        </View>
    );
});
export default FilterOptions;