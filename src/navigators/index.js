import { StackNavigator, addNavigationHelpers } from 'react-navigation';

import HomeScreen from '../components/HomeScreen';
import LoginScreen from '../components/LoginScreen';
import ProfileScreen from '../components/ProfileScreen';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

export const AppNavigator = StackNavigator({
    Login: {
        screen: LoginScreen
    },
    Home: {
        screen: HomeScreen
    },
    Profile: {
        screen: ProfileScreen
    },
});

const AppWithNavigationState = ({ dispatch, nav}) => (
    <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

AppWithNavigationState.propTypes = {
    dispatch: PropTypes.func.isRequired,
    nav: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    nav: state.nav
});

export default connect(mapStateToProps)(AppWithNavigationState);