import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import  { useSelector } from 'react-redux'

import StarterStack from './StarterStack'
//import AppTab from './AppTab'

export default () => {
    const MainStack = createStackNavigator()
    const name = useSelector(state => state.userReducer.name) 

    return(
        <NavigationContainer>
            <MainStack.Navigator screenOptions={{headerShown: false}}>
                <MainStack.Screen name="Starter" component={StarterStack} />
               {/* {
                   name 
                   ?
                   <MainStack.Screen name="Starter" component={StarterStack} />
                   :
                   <MainStack.Screen name="App" component={AppTab} />
               } */}
            </MainStack.Navigator>
        </NavigationContainer>
    )
}