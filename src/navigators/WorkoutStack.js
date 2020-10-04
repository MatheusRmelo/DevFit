import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import WorkoutSelect from '../pages/WorkoutSelect'
import WorkoutCheckList from '../pages/WorkoutCheckList'

export default () => {
    const WorkoutStack = createStackNavigator()

    return(
        <WorkoutStack.Navigator>
            <WorkoutStack.Screen name="WorkoutSelect" component={WorkoutSelect} />
            <WorkoutStack.Screen name="WorkoutCheckList" component={WorkoutCheckList} />
        </WorkoutStack.Navigator>
    )
}