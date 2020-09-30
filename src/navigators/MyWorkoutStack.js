import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import MyWorkouts from '../pages/MyWorkouts'
//import HomeConfig from '../pages/HomeConfig'

const MyWorkoutStack = createStackNavigator()

export default () => (
    <MyWorkoutStack.Navigator>
        <MyWorkoutStack.Screen name="MyWorkouts" component={MyWorkouts} />
        
    </MyWorkoutStack.Navigator>
)