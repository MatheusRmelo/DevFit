import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
    flex:1;
    justify-content: center;
    align-items:center;
    background-color: white;
    padding:0 32px;
`
export const WelcomeText = styled.Text`
    font-size: 24px;
    color: #333;
    margin-top: 64px;
`
export const WelcomeImage = styled.View`
    flex:1;
    justify-content: center;
`
export const WelcomeLogo = styled.Image`
    width:200px;
    height:200px;
`
export const BeginConfigArea = styled.View`
    margin-bottom: 64px;
    width:100%;
`
export const ButtonText= styled.Text`
    color: white;
`