import React, { useState, useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

import { 
    Container,
    ConfigButtonArea,
    ConfigButtonImage,
    Legend,
    LegendBox,
    LegendItem,
    LegendText
 } from './styles'

import HomeMonthScroll from '../../components/HomeMonthScroll'
import HomeDaysScroll from '../../components/HomeDaysScroll'
import HomeDaysStatus from '../../components/HomeDaysStatus'

import { useSelector } from 'react-redux'

export default () => {
    const navigation = useNavigation()

    let today = new Date()
    const [selectedMonth, setSelectedMonth] = useState(today.getMonth())
    const [selectedDay, setSelectedDay] = useState(today.getDate())
    const dailyProgress = useSelector(state => state.users.dailyProgress)
    const workoutDays = useSelector(state => state.users.workoutDays)

    const ConfigButton = () => {

        const btnAction = () => {
            navigation.navigate('HomeConfig')
        }

        return(
            <ConfigButtonArea onPress={btnAction}>
                <ConfigButtonImage source={require('../../assets/config.png')} />
            </ConfigButtonArea>
        )
    }

    useLayoutEffect(()=>{
        navigation.setOptions({
            title: 'Seu progresso diário',
            headerRight: ()=>(<ConfigButton />),
            headerRightContainerStyle:{
                marginRight:8
            },
            headerTitleAlign: 'center'
        })
        //navigation.setParams({workoutDays})
    }, [])

    
    return(
        <Container>
            <HomeMonthScroll
                selectedMonth={selectedMonth}
                setSelectedMonth={setSelectedMonth}
            />
            <HomeDaysScroll 
                selectedMonth={selectedMonth}
                selectedDay={selectedDay}
                setSelectedDay={setSelectedDay}


                dailyProgress={dailyProgress}
                workoutDays={workoutDays}
            />
            <HomeDaysStatus
                selectedMonth={selectedMonth}
                selectedDay={selectedDay}
                setSelectedDay={setSelectedDay}
                dailyProgress={dailyProgress}
                workoutDays={workoutDays}

                addProgress={()=>dispatch({type: 'ADD_PROGRESS', payload:{date}})}
                delProgress={()=>dispatch({type: 'DEL_PROGRESS', payload:{date}})}
                goToWorkout = {()=>navigation.navigate('WorkoutStack')}
            />

            <LegendText>Mes: {selectedMonth}</LegendText>
            <LegendText>Day: {selectedDay}</LegendText>

            <Legend>
                <LegendText>Legenda:</LegendText>
                <LegendItem>
                    <LegendBox color='#B5EEFF'></LegendBox>
                    <LegendText>Hoje</LegendText>
                </LegendItem>
                <LegendItem>
                    <LegendBox color='#B5FFE8'></LegendBox>
                    <LegendText>Treino feito</LegendText>
                </LegendItem>
                <LegendItem>
                    <LegendBox color='#FFB5B5'></LegendBox>
                    <LegendText>Treino perdido</LegendText>
                </LegendItem>
                <LegendItem>
                    <LegendBox color='#E4E4E4' style={{opacity: 0.2}}></LegendBox>
                    <LegendText>Dia de descanso</LegendText>
                </LegendItem>
                <LegendItem>
                    <LegendBox color='#E4E4E4'></LegendBox>
                    <LegendText>Dia futuro</LegendText>
                </LegendItem>
            </Legend>
        </Container>
    )
}