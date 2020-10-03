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


    const AddWorkoutButton = ({onPress}) => {
        return(
            <ButtonArea onPress={onPress} underlayColor="transparent">
                <ButtonImage source={require('../../assets/add.png')} />
            </ButtonArea>
        )
    }

    const btnAction = () => {
        navigation.navigate('EditWorkout')
    }


    useLayoutEffect(()=>{
        navigation.setOptions({
            title: 'Meus treinos',
            headerTitleAlign: 'center',
            headerRight:()=><AddWorkoutButton onPress={btnAction} />,
            headerRightContainerStyle: {marginRight:8}
        })
        //navigation.setParams({workoutDays})
    }, [])

    const editWorkout = (workout) => {
        navigation.navigate('EditWorkout', {workout})
    }

    
    return(
        <Container>
            <WorkoutList 
                data={myWorkouts}
                renderItem={({item})=>
                    <Workout data={item} editAction={()=>editWorkout(item)} delAction={()=>dispatch({type:'DEL_WORKOUT', payload:{workout:item}})} />
                }
            />
        </Container>
    )
}