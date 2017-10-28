import React, {
    Component
} from 'react';
import { Text, View } from 'react-native';

import styles from './styles/HomeStyle';

class LoginScreen extends React.Component {
    render(){
        return (
            <View style={[styles.container]}>
                <Text> LoginScreen </Text>
            </View>
        );
    }
}

export default LoginScreen;