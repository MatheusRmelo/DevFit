import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import HomeStack from './HomeStack'
import TempScreen from '../pages/TempScreen'
//import WorkoutStack from './WorkoutStack'
//import MyWorkoutsStack from './MyWorkoutsStack'

const Tab = createBottomTabNavigator()

export default () => (
    <Tab.Navigator>
        <Tab.Screen name="HomeStack" component={HomeStack} />
        <Tab.Screen name="Workout" component={TempScreen} />
        <Tab.Screen name="MyWorkouts" component={TempScreen} />
    </Tab.Navigator>   
)