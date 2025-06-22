import { Image, View } from 'react-native';
import { logo } from '../../../assets';
import styles from './styles';

const Header = () => {
    return (
        <View style={styles.container}>
            <Image source={logo} style={styles.logo} />
        </View>
    );
};

export default Header;
