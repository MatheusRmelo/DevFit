import React, { useState, useLayoutEffect } from 'react'
import { useNavigation, useRoute, CommonActions } from '@react-navigation/native'
import { HeaderBackButton } from '@react-navigation/stack'
import { 
    StatusBar
} from 'react-native'
import { 
    Container,
    SafeArea,
    WorkoutHeader,
    WorkoutTitle,
    WorkoutClose,
    WorkoutCloseText,
    WorkoutList
 } from './styles'

import { useSelector, useDispatch } from 'react-redux'

import ExerciseItem from '../../components/ExerciseItem'

export default () => {
    const navigation = useNavigation()
    const route = useRoute()
    let workout = route.params?.workout ?? ''
    const [exercises, setExercises] = useState([...workout.exercises])
    const dispatch = useDispatch()

    useLayoutEffect(()=>{
        navigation.setOptions({
           headerShown:false
        })
        //navigation.setParams({workoutDays})
    }, [])



    const checkAction = (item, index) => {
        let newExercises = [...exercises]
        if(!item.done){
            newExercises[index].done = true
        }else{
            newExercises[index].done = false
        }
        setExercises(newExercises)

        checkWorkout()

    }
    const checkWorkout = () => {
        if(exercises.every(i=>i.done)){
            alert('PARABÉNS! Você finalizou!')
            let today = new Date()
            let thisYear = today.getFullYear()
            let thisMonth = today.getMonth() + 1
            let thisDay = today.getDate()
            thisMonth = (thisMonth<10) ? '0'+thisMonth: thisMonth
            thisDay = (thisDay<10) ? '0'+thisDay: thisDay
            let dFormated= `${thisYear}-${thisMonth}-${thisDay}`

            dispatch({type:'ADD_PROGRESS', payload:{date:dFormated}})
            dispatch({type:'SET_LASTWORKOUT', payload:{id: workout.id}})
            dispatch({type: 'SET_TABBAR', payload:{tabBarVisible:true}})
            navigation.dispatch(
                CommonActions.reset({
                  index: 0,
                  routes: [
                    {
                      name: 'HomeStack',
                    },
                  ],
                })
            );
        }
    }

    return(
        <Container source={require('../../assets/fitness.jpg')}>
            <StatusBar barStyle="light-content" />
            <SafeArea>
                <WorkoutHeader>
                    <WorkoutTitle>{workout.name}</WorkoutTitle>
                    <WorkoutClose onPress={()=>navigation.goBack()} underlayColor="transparent">
                        <WorkoutCloseText>X</WorkoutCloseText>
                    </WorkoutClose>
                </WorkoutHeader>
                <WorkoutList 
                    data={exercises} 
                    renderItem = {({item, index})=>(
                        <ExerciseItem 
                            data={item}
                            index={index}
                            checkAction={()=>checkAction(item,index)}
                        />
                    )}
                    keyExtractor = {item=>item.id.toString()}
                />
            </SafeArea>
        </Container>
    )
}