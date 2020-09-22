import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import StarterIntro from '../pages/StarterIntro'

export default () => {
    const StaterStack = createStackNavigator()

    return(
        <StaterStack.Navigator>
            <StaterStack.Screen name="Starter" component={StarterIntro} />
        </StaterStack.Navigator>
    )
}