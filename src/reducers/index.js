import { AppNavigator } from '../navigators';
import { NavigationActions } from 'react-navigation';
import { combineReducers } from 'redux';

const ParamsAction = {
    login: AppNavigator.router.getActionForPathAndParams('Login'),
    home: AppNavigator.router.getActionForPathAndParams('Home')
};

const actionLogin = AppNavigator.router.getStateForAction(ParamsAction.login);

const initNavState = AppNavigator.router.getStateForAction(ParamsAction.home, actionLogin);

navReducer = (state = initNavState, action) => {
    let nextState;
    switch(action.type){
        default:
            nextState = AppNavigator.router.getStateForAction(action, state);
            break;
    }

    return nextState || state;
}

const initAuthState = { isLoggedIn: false }

authReducer = (state = initAuthState, action) => {
    switch(action.type){
        case 'Login': 
            return {...state, isLoggedIn: true }
        case 'Logout':
            return {...state, isLoggedIn: false }
        default: 
            return state;
    }
}

const AppReducer = combineReducers({nav: navReducer, auth: authReducer});
export default AppReducer;