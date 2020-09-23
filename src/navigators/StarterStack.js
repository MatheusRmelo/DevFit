import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import StarterIntroPage from '../pages/StarterIntro'
import StarterNamePage from '../pages/StarterName'

export default () => {
    const StaterStack = createStackNavigator()

    return(
        <StaterStack.Navigator >
            <StaterStack.Screen name="StarterIntro" component={StarterIntroPage} options={{headerShown: false}} />
            <StaterStack.Screen name="StarterName" component={StarterNamePage} />
        </StaterStack.Navigator>
    )
}