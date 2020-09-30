import React, { useState, useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

import { 
    Container,
    WorkoutList,
    ButtonArea,
    ButtonImage
 } from './styles'

import Workout from '../../components/Workout'

import { useSelector, useDispatch } from 'react-redux'

export default () => {
    const navigation = useNavigation()
    const name = useSelector(state => state.users.name)
    const myWorkouts = useSelector(state => state.users.myWorkouts)

    const dispatch = useDispatch()


    const AddWorkoutButton = () => {
        return(
            <ButtonArea>
                <ButtonImage source={require('../../assets/add.png')} />
            </ButtonArea>
        )
    }


    useLayoutEffect(()=>{
        navigation.setOptions({
            title: 'Meus treinos',
            headerTitleAlign: 'center',
            headerRight:()=><AddWorkoutButton />,
            headerRightContainerStyle: {marginRight:8}
        })
        //navigation.setParams({workoutDays})
    }, [])

    
    return(
        <Container>
            <WorkoutList 
                data={myWorkouts}
                renderItem={({item})=>
                    <Workout data={item} editAction={()=>{}} delAction={()=>{}} />
                }
            />
        </Container>
    )
}