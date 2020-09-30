import React, { useState, useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

import { 
    Container,
    Label,
    Input,
    ListArea,
    DayItem,
    DayItemText,
    LevelItem,
    LevelItemText
 } from './styles'

import HomeMonthScroll from '../../components/HomeMonthScroll'
import HomeDaysScroll from '../../components/HomeDaysScroll'
import HomeDaysStatus from '../../components/HomeDaysStatus'

import { useSelector, useDispatch } from 'react-redux'

export default () => {
    const navigation = useNavigation()
    const name = useSelector(state => state.users.name)
    const level = useSelector(state => state.users.level) 
    const workoutDays = useSelector(state => state.users.workoutDays)

    const dispatch = useDispatch()

    const toggleWorkoutDay = (d) =>{
        let newWorkoutDays = [...workoutDays]
        if(newWorkoutDays.includes(d)){
            if(newWorkoutDays.length===1){
                alert('Calma ae! você tem que treinar pelo menos 1 dia')
                return
            }
            newWorkoutDays = newWorkoutDays.filter(i=>i!==d)
        }else{
            newWorkoutDays.push(d)
        }

        dispatch({type:'SET_WORKOUTDAYS', payload:{workoutDays:newWorkoutDays}})
    }   
    

    useLayoutEffect(()=>{
        navigation.setOptions({
            title: 'Configurações',
            headerTitleAlign: 'center'
        })
        //navigation.setParams({workoutDays})
    }, [])

    
    return(
        <Container>
            <Label>Seu nome completo:</Label>
            <Input value={name} onChangeText={t => dispatch({type:'SET_NAME',payload:{name:t}})} />

            <Label>Dias em que você treina:</Label>
            <ListArea>
                <DayItem underlayColor="transparent" onPress={()=>toggleWorkoutDay(1)} style={workoutDays.includes(1)?{backgroundColor:'#A5E8BC'}:null}>
                    <DayItemText>S</DayItemText>
                </DayItem>
                <DayItem underlayColor="transparent" onPress={()=>toggleWorkoutDay(2)} s style={workoutDays.includes(2)?{backgroundColor:'#A5E8BC'}:null}>
                    <DayItemText>T</DayItemText>
                </DayItem >
                <DayItem underlayColor="transparent" onPress={()=>toggleWorkoutDay(3)} s style={workoutDays.includes(3)?{backgroundColor:'#A5E8BC'}:null}>
                    <DayItemText>Q</DayItemText>
                </DayItem>
                <DayItem underlayColor="transparent" onPress={()=>toggleWorkoutDay(4)} s style={workoutDays.includes(4)?{backgroundColor:'#A5E8BC'}:null}>
                    <DayItemText>Q</DayItemText>
                </DayItem>
                <DayItem underlayColor="transparent" onPress={()=>toggleWorkoutDay(5)} s style={workoutDays.includes(5)?{backgroundColor:'#A5E8BC'}:null}>
                    <DayItemText>S</DayItemText>
                </DayItem>
                <DayItem underlayColor="transparent" onPress={()=>toggleWorkoutDay(6)} s style={workoutDays.includes(6)?{backgroundColor:'#A5E8BC'}:null}>
                    <DayItemText>S</DayItemText>
                </DayItem>
                <DayItem underlayColor="transparent" onPress={()=>toggleWorkoutDay(0)} s style={workoutDays.includes(0)?{backgroundColor:'#A5E8BC'}:null}>
                    <DayItemText>D</DayItemText>
                </DayItem>
            </ListArea>

            <Label>Seu nível: </Label>
            <ListArea>
                <LevelItem underlayColor="transparent" onPress={()=>dispatch({type: 'SET_LEVEL', payload:{level: 'beginner'}})} style={level === 'beginner'?{backgroundColor: '#A5E8BC'}:null} >
                    <LevelItemText>Iniciante</LevelItemText>
                </LevelItem>
                <LevelItem underlayColor="transparent" onPress={()=>dispatch({type: 'SET_LEVEL', payload:{level: 'intermediate'}})} style={level === 'intermediate'?{backgroundColor: '#A5E8BC'}:null}>
                    <LevelItemText>Intermediário</LevelItemText>
                </LevelItem>
                <LevelItem  onPress={()=>dispatch({type: 'SET_LEVEL', payload:{level: 'advanced'}})} style={level === 'advanced'?{backgroundColor: '#A5E8BC'}:null}>
                    <LevelItemText>Avançado</LevelItemText>
                </LevelItem>
            </ListArea>
        </Container>
    )
}