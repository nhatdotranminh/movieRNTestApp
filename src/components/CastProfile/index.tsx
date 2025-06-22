import React from 'react';
import { Image, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';
import { imageBaseUrl } from '../../config/AppConfig';
import { Cast } from '../../types';
import styles from './styles';
const CastProfile = ({ item }: { item: Cast }) => {
    return (
        <View style={styles.castCard}>
            {item.profile_path ? (
                <Image
                    source={{ uri: `${imageBaseUrl}${item.profile_path}` }}
                    style={styles.castImage}
                />
            ) : (
                <View style={[styles.castImage, styles.placeholderImage]}>
                    <Icon name="user" size={60} color="#ccc" />
                </View>
            )}
            <View style={styles.castInfo}>
                <Text style={styles.castName} numberOfLines={2}>{item.original_name
                }</Text>
                <Text style={styles.castCharacter} numberOfLines={1}>{item.name}</Text>
            </View>
        </View>
    )
}
export default CastProfile