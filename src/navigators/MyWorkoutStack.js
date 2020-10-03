import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import MyWorkouts from '../pages/MyWorkouts'
import EditWorkout from '../pages/EditWorkout'

const MyWorkoutStack = createStackNavigator()

export default () => (
    <MyWorkoutStack.Navigator>
        <MyWorkoutStack.Screen name="MyWorkouts" component={MyWorkouts} />
        <MyWorkoutStack.Screen name="EditWorkout" component={EditWorkout} />
    </MyWorkoutStack.Navigator>
)