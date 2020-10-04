import React from 'react'
import styled from 'styled-components/native'

import useMuscleImage from './useMuscleImage'

const ExerciseItemArea = styled.View`
    height: 50px;
    flex-direction: row;
    margin-bottom: 8px;
`
const ExerciseMuscleArea = styled.View`
    width: 50px;
    height: 50px;
    background-color: #FFCC98;
    border-radius: 8px;
    justify-content: center;
    align-items: center;
`
const ExerciseMuscleImage = styled.Image`
    width: 35px;
    height: 35px;
`
const ExerciseInfo = styled.View`
    flex:1;
    flex-direction: column;
    justify-content: center;
    margin-left: 8px;
`
const ExerciseName = styled.Text`
    font-size: 12px;
    color: white;
`
const ExerciseDetails = styled.Text`
    font-size: 12px;
    color: #999;
`
const ExerciseCheck = styled.TouchableHighlight`
    width: 60px;
    align-items: center;
    justify-content: center;
`
const ExerciseDone = styled.Image`
    width: 40px;
    height: 40px;
`
const ExerciseUnDone = styled.View`
    width: 40px;
    height: 40px;
    border:5px solid white;
    border-radius: 20px;
`
const ExerciseCount = styled.View`
    width:25px;
    justify-content: center;
`
const ExerciseCountText = styled.Text`
    font-size: 18px;
    color: white;
`


export default (props)=>{
    
    return (
        <ExerciseItemArea>
            <>
                <ExerciseCount>
                    <ExerciseCountText>{props.index+1}.</ExerciseCountText>
                </ExerciseCount>
                <ExerciseMuscleArea>
                    <ExerciseMuscleImage source={useMuscleImage(props.data.muscle)}/>
                </ExerciseMuscleArea>
                <ExerciseInfo>
                    <ExerciseName>{props.data.name}</ExerciseName>
                    <ExerciseDetails>
                        {`${props.data.sets} séries - ${props.data.reps} rep ${props.data.load?` - ${props.data.load} kg`:''}`}
                    </ExerciseDetails>
                </ExerciseInfo>
                <ExerciseCheck onPress={props.checkAction} underlayColor="transparent">
                    {
                        props.data.done
                        ?<ExerciseDone source={require('../assets/check-white.png')} />
                        :<ExerciseUnDone></ExerciseUnDone>
                    }
                </ExerciseCheck>
            </>
        </ExerciseItemArea>
        
    )
}