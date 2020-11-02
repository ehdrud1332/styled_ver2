import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack';

import IntroScreen from "./screens/IntroScreen";
import MainScreen from "./screens/MainScreen";
import DetailScreen from "./screens/DetailScreen";

const MainStack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
          <MainStack.Navigator headerMode='none'>
            {/*<MainStack.Screen*/}
            {/*    name='IntroScreen'*/}
            {/*    component={IntroScreen}*/}
            {/*/>*/}
            <MainStack.Screen
                name='MainScreen'
                component={MainScreen}
            />
            <MainStack.Screen
                name='DetailScreen'
                component={DetailScreen}
            />
          </MainStack.Navigator>
        </NavigationContainer>
    );
};

export default App;
