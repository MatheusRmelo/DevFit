import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import PreloadPage from '../pages/Preload'
import StarterStack from './StarterStack'
//import AppTab from './AppTab'

export default () => {
    const MainStack = createStackNavigator()

    return(
        <NavigationContainer>
            <MainStack.Navigator screenOptions={{headerShown: false}} initialRouteName="Preload">
                <MainStack.Screen name="Preload" component={PreloadPage} />
                <MainStack.Screen name="Starter" component={StarterStack} />
                {/* <MainStack.Screen name="App" component={AppTab} /> */}
            </MainStack.Navigator>
        </NavigationContainer>
    )
}