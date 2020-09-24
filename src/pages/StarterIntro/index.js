import React from 'react'
import {
    Container,
    WelcomeText,
    WelcomeImage,
    BeginConfigArea,
    WelcomeLogo,
    ButtonText
} from './styles'
import DefaultButton from '../../components/DefaultButton'

import { useNavigation } from '@react-navigation/native'

export default () => {
    const navigation = useNavigation()
    const start = () => {
        //alert('dqw')
        navigation.navigate('StarterName')
    }

    return(
        <Container>
            <WelcomeText>Bem vindo(a) ao DevFit</WelcomeText>
            <WelcomeImage>
                <WelcomeLogo source={require('../../assets/boneco.png')} />
            </WelcomeImage>
            <BeginConfigArea>
                <DefaultButton width="100%" bgColor="#0072C0" underlayColor="#0B7AC6" onPress={start}>
                    <ButtonText>INICIAR CONFIGURAÇÃO</ButtonText>
                </DefaultButton>
            </BeginConfigArea>
        </Container>
    )
}
