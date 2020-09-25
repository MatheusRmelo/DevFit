import React from 'react'
import styled from 'styled-components/native'

import useMuscleImage from './useMuscleImage'

import { Text} from 'react-native'
const Workout = styled.View`
    background-color: #f1f1f1;
    flex-direction: row;
    border-radius: 8px;
    margin-bottom: 16px;
    border: 2px solid #DDD;
`
const WorkoutInfo = styled.View`
    flex:1;
`
const WorkoutTitle = styled.Text`
    font-size: 18px;
    margin: 8px;
`
const MuscleScroll = styled.ScrollView`
    margin:8px;
`
const MuscleGroup = styled.View`
    width: 40px;
    height: 40px;
    background-color: #FFCC98;
    border-radius:8px;
    margin-right:8px;
    justify-content:center;
    align-items:center;
`
const MuscleImage = styled.Image`
    width:30px;
    height:30px;`
const WorkoutActions = styled.View`
    justify-content: center;
`
const WorkoutButton = styled.TouchableHighlight`
    width: 25px;
    height: 25px;
    margin: 16px;
    justify-content: center;
    align-items: center;
`
const WorkoutButtonImage = styled.Image`
    width: 25px;
    height: 25px;
`

export default (props) => {
    let muscleGroups = []
    for(let i in props.data.exercises){
        if(!muscleGroups.includes(props.data.exercises[i].muscle)){
            muscleGroups.push(props.data.exercises[i].muscle)
        }
    }

    return(
        <Workout>
            <WorkoutInfo>
                <WorkoutTitle>{props.data.name}</WorkoutTitle>
                <MuscleScroll horizontal={true}>
                    {muscleGroups.map((m, index)=> (
                        <MuscleGroup key={index}>
                            <MuscleImage source={useMuscleImage(m)} />
                        </MuscleGroup>
                    ))}
                </MuscleScroll>
            </WorkoutInfo>
            <WorkoutActions>
                <WorkoutButton>
                    <WorkoutButtonImage source={require('../assets/add.png')} />
                </WorkoutButton>
            </WorkoutActions>
        </Workout>
    )
}