import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import StarterIntroPage from '../pages/StarterIntro'
import StarterNamePage from '../pages/StarterName'
import StarterDaysPage from '../pages/StarterDays'
import StarterNivelPage from '../pages/StarterNivel'
import StarterRecommendationPage from '../pages/StarterRecommendations'

export default () => {
    const StaterStack = createStackNavigator()

    return(
        <StaterStack.Navigator >
            <StaterStack.Screen name="StarterIntro" component={StarterIntroPage} options={{headerShown: false}} />
            <StaterStack.Screen name="StarterName" component={StarterNamePage} />
            <StaterStack.Screen name="StarterDays" component={StarterDaysPage} />
            <StaterStack.Screen name="StarterNivel" component={StarterNivelPage} />
            <StaterStack.Screen name="StarterRecommendations" component={StarterRecommendationPage} />
        </StaterStack.Navigator>
    )
}