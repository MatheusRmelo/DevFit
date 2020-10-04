import React, { useState, useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { HeaderBackButton } from '@react-navigation/stack'

import { 
    Container,
    WorkoutList,
    Title
 } from './styles'

import Workout from '../../components/Workout'

import { useSelector, useDispatch } from 'react-redux'

export default () => {
    const navigation = useNavigation()
    const myWorkouts = useSelector(state => state.users.myWorkouts)
    let lastWorkout = useSelector(state => state.users.lastWorkout)
    if(lastWorkout){
        lastWorkout = myWorkouts.find(i=>i.id===lastWorkout)
    }
    const dispatch = useDispatch()

    const handleBackAction = () => {
        dispatch({type: 'SET_TABBAR', payload:{tabBarVisible:true}})
        navigation.navigate('HomeStack')
    }

    useLayoutEffect(()=>{
        navigation.setOptions({
            title: 'Escolha o seu treino',
            headerTitleAlign: 'center',
            headerLeft:()=><HeaderBackButton onPress={handleBackAction}/>
        })
        //navigation.setParams({workoutDays})
    }, [])

    const goWorkout = (workout) => {
        navigation.navigate('WorkoutCheckList',{workout})
    }
    
    return(
        <Container>
            {
                lastWorkout ?
                <>  
                    <Title>Seu último treino foi:</Title>
                    <Workout data={lastWorkout} />
                </>
                :null
            }
            


            <Title>Escolha seu treino de hoje:</Title>
            <WorkoutList 
                data={myWorkouts}
                renderItem={({item})=>
                    <Workout data={item} goAction={()=>goWorkout(item)} />
                }
            />
        </Container>
    )
}