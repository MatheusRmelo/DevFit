import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import CustomTabBar from '../components/CustomTabBar'

import HomeStack from './HomeStack'
import TempScreen from '../pages/TempScreen'
import WorkoutStack from './WorkoutStack'
import MyWorkoutsStack from './MyWorkoutStack'

const Tab = createBottomTabNavigator()

const items = [
    {
        type:'regular',
        text: 'Ínicio',
        icon: require('../assets/home.png'),
        route: 'HomeStack'
    },
    {
        type:'big',
        icon: require('../assets/dumbbell.png'),
        route: 'Workout'
    },
    {
        type:'regular',
        text: 'Meus treinos',
        icon: require('../assets/myworkouts.png'),
        route: 'MyWorkouts'
    }

]

export default () => (
    <Tab.Navigator tabBar={(props)=> <CustomTabBar {...props} items={items} />}>
        <Tab.Screen name="HomeStack" component={HomeStack} />
        <Tab.Screen name="Workout" component={WorkoutStack}/>
        <Tab.Screen name="MyWorkouts" component={MyWorkoutsStack} />
    </Tab.Navigator>   
)