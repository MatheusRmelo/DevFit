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
    }, [workouts])

    const nextAction = () => {
        // if( level.trim() === '' ){
        //     alert('Você precisa escolher uma opção.')
        //     return
        // }
        // navigation.navigate('StarterRecommendations')
    }

   

   
    return(
        <Container>
            <HeaderText>Opções de treino pré-criados com base no seu nível.</HeaderText>
            <HeaderText>Você selecionou {workouts.length} treinos</HeaderText>


            <WorkoutList
                data={workoutJson}
                renderItem = {({item})=><Workout data={item} />} 
                keyExtractor = {item => item.id}
            />

        </Container>
    )
}
