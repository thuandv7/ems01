import React, {
    Component
} from 'react';
import { Text, View } from 'react-native';

import styles from './styles/HomeStyle';

class HomeScreen extends React.Component {
    render(){
        return (
            <View style={[styles.container]}>
                <Text> HOME </Text>
            </View>
        );
    }
}

export default HomeScreen;