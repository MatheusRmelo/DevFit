import React, { useState, useLayoutEffect } from 'react'
import {
    Container,
    HeaderText,
    NextButton,
    LevelArea,
    BoldText
} from './styles'

import { Text } from 'react-native'

import DefaultButton from '../../components/DefaultButton'

import { useNavigation } from '@react-navigation/native'
import { useSelector, useDispatch } from 'react-redux'

export default () => {
    const oldLevel = useSelector(state => state.users.level)
    const [ level, setLevel ] = useState(oldLevel)
    const workoutDays = useSelector(state => state.users.workoutDays)

    //const [workoutD, setWorkoutD] = useState(workoutDays)

    const navigation = useNavigation()
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
    }, [level])

    const nextAction = () => {
        if( level.trim() === '' ){
            alert('Você precisa escolher uma opção.')
            return
        }
        navigation.navigate('StarterRecommendations')
    }

    const chooseLevel = (l) => {
        setLevel(l)
        dispatch({
            type: 'SET_LEVEL',
            payload: {level:l}
        })
    }
    

    const marginBottomButton = '16px'
    let funnyPhrase = ''
    switch(workoutDays.length){
        case 1:
            funnyPhrase = 'Só 1 dia não adiantar muito, mas...'
            break
        case 2:
            funnyPhrase = '2 dias eu acho pouco, mas quem sou eu pra te julgar?'
            break
        case 3:
            funnyPhrase = 'Legal, 3 dias dá pro gasto'
            break
        case 4:
            funnyPhrase = 'Legal, 4 dias vai ser TOP!'
            break
        case 5: 
            funnyPhrase = 'É isso aí, 5 dias é o mínimo, lets GO!'
            break
        case 6:
            funnyPhrase = 'É, 6 dias não é pra todo mundo...'
            break
        case 7:
            funnyPhrase = 'Wooow! Todo dia?! WTF?!'
            break
    }
    return(
        <Container>
            <HeaderText>{funnyPhrase}</HeaderText>
            <HeaderText><BoldText>Qual seu nível hoje?</BoldText></HeaderText>

            <LevelArea>
                <DefaultButton bgColor={level==='beginner'?'#A5E8BC':false} onPress={()=>chooseLevel('beginner')} marginBottom={marginBottomButton} underlayColor="#CCC">
                    <Text>Iniciante / Um frango</Text>
                </DefaultButton>
                <DefaultButton bgColor={level==='intermediate'?'#A5E8BC':false} onPress={()=>chooseLevel('intermediate')} marginBottom={marginBottomButton} underlayColor="#CCC">
                    <Text>Intermediário / Me viro bem</Text>
                </DefaultButton>
                <DefaultButton bgColor={level==='advanced'?'#A5E8BC':false} onPress={()=>chooseLevel('advanced')} marginBottom={marginBottomButton} underlayColor="#CCC">
                    <Text>Avançado / Primo do The Rock</Text>
                </DefaultButton>
            </LevelArea>
        </Container>
    )
}
