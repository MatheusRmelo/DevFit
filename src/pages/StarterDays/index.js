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

import { useNavigation } from '@react-navigation/native'
import { useSelector, useDispatch } from 'react-redux'

export default () => {
    const navigation = useNavigation()
    const nameOld = useSelector(state => state.users.name)
    const [name, setName] = useState(nameOld)
    const dispatch = useDispatch()

    useLayoutEffect(()=>{
        navigation.setOptions({
            title: '',
            headerRight: ()=>(<NextButton title="Próximo" onPress={nextAction} />),
            headerRightContainerStyle:{
                marginRight:10
            }
        })
    }, [name])
    const nextAction = () => {
        if(!name){
            alert('Você precisa de um nome!')
            return
        }
        dispatch({
            type: 'SET_NAME',
            payload: name
        })
        navigation.navigate('StarterDays')
    }

    const widthButton = '100px'
    const marginBottomButton = '16px'
    return(
        <Container>
            <HeaderText>Opá, <BoldText>{name}</BoldText>, tudo bem?</HeaderText>
            <HeaderText>Quais <BoldText>dias da semana você pretende treinar?</BoldText></HeaderText>

            <DaysArea>
                <DefaultButton width={widthButton} marginBottom={marginBottomButton}>
                    <Text>Segunda</Text>
                </DefaultButton>
                <DefaultButton width={widthButton} marginBottom={marginBottomButton}>
                    <Text>Terça</Text>
                </DefaultButton>
                <DefaultButton width={widthButton} marginBottom={marginBottomButton}>
                    <Text>Quarta</Text>
                </DefaultButton>
                <DefaultButton width={widthButton} marginBottom={marginBottomButton}>
                    <Text>Quinta</Text>
                </DefaultButton>
                <DefaultButton width={widthButton} marginBottom={marginBottomButton}>
                    <Text>Sexta</Text>
                </DefaultButton>
                <DefaultButton width={widthButton} marginBottom={marginBottomButton}>
                    <Text>Sábado</Text>
                </DefaultButton>
                <DefaultButton width={widthButton} marginBottom={marginBottomButton}>
                    <Text>Domingo</Text>
                </DefaultButton>
            </DaysArea>
        </Container>
    )
}
