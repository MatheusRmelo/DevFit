import React, { useState, useEffect } from 'react'
import styled from 'styled-components/native'

import DefaultButton from './DefaultButton'

const BalloonTriangle = styled.View`
    width: 0;
    height: 0;
    borderLeftColor: transparent;
    borderLeftWidth: 16px;
    borderBottomWidth: 16px;
    borderBottomColor: #EDEDED;
    borderRightWidth: 16px;
    borderRightColor: transparent;
    
`
const BalloonArea = styled.View`
    width: 90%;
    padding: 16px;
    background-color: #EDEDED;
    border-radius: 8px;
`
const BalloonBigText = styled.Text`
    font-size: 16px;
    align-self: center;
`
const ButtonText = styled.Text`
    color: white;
    font-weight:bold;
`
const BalloonText = styled.Text`
    font-size: 12px;
    align-self: center;
    margin-top: 10px;
`
const Strong = styled.Text`
    font-weight: bold;
`
export default (props) => {

    let today = new Date()
    today.setHours(0)
    today.setMinutes(0)
    today.setSeconds(0)
    today.setMilliseconds(0)


    let thisDate = new Date(today.getFullYear(), props.selectedMonth, props.selectedDay)

    let thisYear = thisDate.getFullYear()
    let thisMonth = thisDate.getMonth() + 1
    let thisDay = thisDate.getDate()
    thisMonth = thisMonth<10 ? '0'+thisMonth: thisMonth
    thisDay = thisDay<10 ? '0'+thisDay: thisDay
    let dFormated= `${thisYear}-${thisMonth}-${thisDay}`

    let dayOff = false
    let isToday = false
    let isFuture = false
    let isDone = false

    if( !props.workoutDays.includes(thisDate.getDate())){
        dayOff = true
    }else if(thisDate.getTime() > today.getTime()){
        isFuture = true
    }else{
        if(props.dailyProgress.includes(dFormated)){
            isDone = true
        }else{
            isDone = false
        }
    }

    if(thisDate.getTime() === today.getTime()){
        isToday = true
    }

    const setDone = () =>{
        props.addProgress( dFormated )
    }
    const setUnDone = () => {
        props.delProgress(dFormated)
    }

    return (
        <>
            <BalloonTriangle>

            </BalloonTriangle>
            <BalloonArea>
                {dayOff &&
                    <BalloonBigText>Dia de descanso!</BalloonBigText>
                }
                {isFuture &&
                    <BalloonBigText>Data no futuro</BalloonBigText>
                }
                {!dayOff && !isFuture && isDone &&
                    <>
                        <BalloonBigText><Strong>Parabéns</Strong>, você treinou!</BalloonBigText>
                        <DefaultButton onPress={setUnDone} underlayColor="#4AC34E" bgColor="#4AC34E" style={{marginTop:16}}>
                            <ButtonText>DESMARCAR</ButtonText>
                        </DefaultButton>
                    </>
                }
                {!dayOff && !isFuture && !isDone && !isToday &&
                    <>
                        <BalloonBigText><Strong>Fraco!</Strong> você falhou neste dia.</BalloonBigText>
                        <DefaultButton onPress={setDone} underlayColor="#4AC34E" bgColor="#4AC34E" style={{marginTop:16}}>
                            <ButtonText>MARCAR COMO FEITO</ButtonText>
                        </DefaultButton>
                    </>
                }
                {!dayOff && !isFuture && !isDone && isToday &&
                    <>
                        <BalloonBigText><Strong>HOJE TEM TREINO!</Strong></BalloonBigText>
                        <BalloonText>Você tem ... para treinar</BalloonText>
                        <DefaultButton onPress={props.goToWorkout} underlayColor="#4AC34E" bgColor="#4AC34E" style={{marginTop:16}}>
                            <ButtonText>INICIAR TREINO</ButtonText>
                        </DefaultButton>
                    </>
                }
            </BalloonArea>
        </>
    )
}