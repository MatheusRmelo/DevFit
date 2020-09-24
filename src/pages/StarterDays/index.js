import React, { useState, useLayoutEffect } from 'react'
import {
    Container,
    HeaderText,
    NameInput,
    NextButton,
    BoldText,
    DaysArea
} from './styles'

import { Text } from 'react-native'

import DefaultButton from '../../components/DefaultButton'

import { useNavigation, useNavigationState } from '@react-navigation/native'
import { useSelector, useDispatch } from 'react-redux'

export default () => {
    const navigation = useNavigation()
    const state = useNavigationState( state => state)
    const name = useSelector(state => state.users.name)
    const workoutDays = useSelector(state => state.users.workoutDays)
    const [workoutD, setWorkoutD] = useState(workoutDays)
    const dispatch = useDispatch()

    useLayoutEffect(()=>{
        navigation.setOptions({
            title: '',
            headerRight: ()=>(<NextButton title="Próximo" onPress={nextAction} />),
            headerRightContainerStyle:{
                marginRight:10
            }
        })
        //navigation.setParams({workoutDays})
    }, [workoutD])

    const nextAction = () => {
        if(!workoutD.length ){
            alert('Você precisa treinar pelo menos 1 dia!')
            return
        }
        navigation.navigate('StarterNivel')
    }

    const toggleDay = (d) => {
        let newWorkoutDays = [...workoutDays]
        if(!workoutDays.includes(d)){
            newWorkoutDays.push(d)
        }else{
            newWorkoutDays = newWorkoutDays.filter(item=>item!==d)  
        }
        dispatch({
            type: 'SET_WORKOUTDAYS',
            payload:{
                workoutDays: newWorkoutDays
            }
        })
        setWorkoutD(newWorkoutDays)
        //navigation.setParams({workoutDays: newWorkoutDays}) 
    }

    const widthButton = '100px'
    const marginBottomButton = '16px'
    return(
        <Container>
            <HeaderText>Opá, <BoldText>{name}</BoldText>, tudo bem?</HeaderText>
            <HeaderText>Quais <BoldText>dias da semana você pretende treinar?</BoldText></HeaderText>

            <DaysArea>
                <DefaultButton bgColor={workoutDays.includes(1)?'#A5E8BC':false} onPress={()=>toggleDay(1)} width={widthButton} marginBottom={marginBottomButton} underlayColor="#CCC">
                    <Text>Segunda</Text>
                </DefaultButton>
                <DefaultButton bgColor={workoutDays.includes(2)?'#A5E8BC':false} onPress={()=>toggleDay(2)} width={widthButton} marginBottom={marginBottomButton} underlayColor="#CCC">
                    <Text>Terça</Text>
                </DefaultButton>
                <DefaultButton bgColor={workoutDays.includes(3)?'#A5E8BC':false} onPress={()=>toggleDay(3)} width={widthButton} marginBottom={marginBottomButton} underlayColor="#CCC">
                    <Text>Quarta</Text>
                </DefaultButton>
                <DefaultButton bgColor={workoutDays.includes(4)?'#A5E8BC':false} onPress={()=>toggleDay(4)} width={widthButton} marginBottom={marginBottomButton} underlayColor="#CCC">
                    <Text>Quinta</Text>
                </DefaultButton>
                <DefaultButton bgColor={workoutDays.includes(5)?'#A5E8BC':false} onPress={()=>toggleDay(5)} width={widthButton} marginBottom={marginBottomButton} underlayColor="#CCC">
                    <Text>Sexta</Text>
                </DefaultButton>
                <DefaultButton bgColor={workoutDays.includes(6)?'#A5E8BC':false} onPress={()=>toggleDay(6)} width={widthButton} marginBottom={marginBottomButton} underlayColor="#CCC">
                    <Text>Sábado</Text>
                </DefaultButton>
                <DefaultButton bgColor={workoutDays.includes(0)?'#A5E8BC':false} onPress={()=>toggleDay(0)} width={widthButton} marginBottom={marginBottomButton} underlayColor="#CCC">
                    <Text>Domingo</Text>
                </DefaultButton>
            </DaysArea>
        </Container>
    )
}
