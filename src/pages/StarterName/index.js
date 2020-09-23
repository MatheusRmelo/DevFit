import React, { useState, useLayoutEffect } from 'react'
import {
    Container,
    HeaderText,
    NameInput,
    NextButton
} from './styles'
import DefaultButton from '../../components/DefaultButton'

import { useNavigation } from '@react-navigation/native'
import { useSelector, useDispatch } from 'react-redux'

export default () => {
    const navigation = useNavigation()
    const nameOld = useSelector(state => state.userReducer.name)
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

    return(
        <Container>
            <HeaderText>Qual é o seu nome?</HeaderText>
            <NameInput 
                value={name} 
                onChangeText={t=>setName(t)} 
                autoFocus={true}
                autoCapitalize="words"
                onSubmitEditing={nextAction}/>
        </Container>
    )
}
