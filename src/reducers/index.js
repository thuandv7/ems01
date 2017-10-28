import { HOME, LOGIN } from "../actions/actionType";

import { AppNavigator } from '../navigators';

const ParamsAction = {
    login: AppNavigator.router.getActionForPathAndParams('Login'),
    home: AppNavigator.router.getActionForPathAndParams('Home')
};

const actionLogin = AppNavigator.router.getStateForAction(ParamsAction.login);
const actionHome = AppNavigator.router.getStateForAction(ParamsAction.home);

const initNavState = actionLogin;//AppNavigator.router.getStateForAction(ParamsAction.login, ParamsAction.home);

export const navReducer = (state = initNavState, action) => {
    let nextState;
    console.log("navReducer");
    console.log(action);
    switch (action.type) {
        case LOGIN:
            nextState = AppNavigator.router.getStateForAction(ParamsAction.login, state);
            break;
        case HOME:
            console.log("HOME - ACTION");
            nextState = AppNavigator.router.getStateForAction(ParamsAction.home, state);
            break;
        default:
            nextState = AppNavigator.router.getStateForAction(action, state);
            break;
    }

    return nextState || state;
};