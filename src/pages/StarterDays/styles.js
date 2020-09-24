import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
    flex:1;
    align-items:center;
    background-color: white;
    padding:64px 32px;
`
export const ButtonText= styled.Text`
    color: white;
`
export const HeaderText = styled.Text`
    font-size: 18px;
    color: #333;
    margin-bottom: 32px;
    text-align:center;
`
export const NameInput = styled.TextInput`
    border: 1px solid #ccc;
    width: 100%;
    height: 50px;
    border-radius: 12px;
    font-size: 16px;
    padding: 8px;
`
export const NextButton = styled.Button``
export const BoldText = styled.Text`
    font-weight: bold;
`
export const DaysArea = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
`