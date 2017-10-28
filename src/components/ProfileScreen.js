import React, {
    Component
} from 'react';
import { Text, View } from 'react-native';

import styles from './styles/HomeStyle';

class ProfileScreen extends React.Component {
    render(){
        return (
            <View style={[styles.container]}>
                <Text> Profile </Text>
            </View>
        );
    }
}

export default ProfileScreen;