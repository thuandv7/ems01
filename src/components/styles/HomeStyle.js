import { Platform, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center', 
        alignItems:'center',
        ...Platform.select({
            ios: {
                marginTop: 20
            },
            android:{
                marginTop: 24
            }
        })
    }
});

export default styles;