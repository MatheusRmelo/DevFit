import React, { useState, useLayoutEffect } from 'react'
import {
    Container,
    HeaderText,
    NextButton,
    LevelArea,
    BoldText,
    WorkoutList
} from './styles'

import workoutJson from '../../presetWorkouts.json'

import { useNavigation } from '@react-navigation/native'
import { useSelector, useDispatch } from 'react-redux'

import Workout from '../../components/Workout'


export default () => {
    const workouts = useSelector(state => state.users.myWorkouts)
    const [workout, setWorkout] = useState(workouts)

    const navigation = useNavigation()
    const dispatch = useDispatch()

    useLayoutEffect(()=>{
        navigation.setOptions({
            title: '',
            headerRight: ()=>(<NextButton title={workouts.length === 0 ? 'Ignorar' : 'Concluir'} onPress={nextAction} />),
            headerRightContainerStyle:{
                marginRight:10
            }
        })
        //navigation.setParams({workoutDays})
    }, [workout])

    const nextAction = () => {
        navigation.replace('App')
    }

    const addWorkout = (item) => {
        let newList = [...workout]
        if(workout.findIndex(i => i.id===item.id) < 0){
            newList.push(item)
            setWorkout(newList)
            dispatch({
                type: 'ADD_WORKOUT',
                payload: {workout:item}
            })
        }else{
            newList = newList.filter(i => i.id !== item.id)
            setWorkout(newList)
            dispatch({
                type: 'DEL_WORKOUT',
                payload: {workout:item}
            })
        }
    }

   
    return(
        <Container>
            <HeaderText>Opções de treino pré-criados com base no seu nível.</HeaderText>
            <HeaderText>Você selecionou {workouts.length} treinos</HeaderText>


            <WorkoutList
                data={workoutJson}
                renderItem = {({item})=><Workout data={item} addAction={()=>addWorkout(item)} />} 
                keyExtractor = {item => item.id}
            />

        </Container>
    )
}
