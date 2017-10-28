import { Button, Text, TouchableOpacity, View } from 'react-native';

import { AppNavigator } from '../navigators';
import React from 'react';
import { connect } from 'react-redux';
import { home } from "../actions";
import styles from './styles/HomeStyle';

class LoginScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hello: 'hi'
        }
    }
    render() {
        console.log("HIHI: ");
        console.log(this.props);
        return ( <View style = {
                [styles.container]
            } >
            <Text> LoginScreen { this.state.hello
            } </Text> 
            <TouchableOpacity onPress={()=> this.goToHome()}>
                <Text> GO TO HOME </Text>
            </TouchableOpacity>
            <Button title="GO HOME" onPress={()=> this.goToHome()}/>
            </View>
        );
    }

    goToHome(){
        this.goHome;
    }
}

const mapDispatchToProps = (dispatch) => {
    console.log('mapDispatchToProps');
  return {
      goHome: () => {
          console.log('hihi :D');
        dispatch(home)
      }//
    }
};

export default connect(mapDispatchToProps)(LoginScreen);