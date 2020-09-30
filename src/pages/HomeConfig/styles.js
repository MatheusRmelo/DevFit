import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
    flex:1;
    margin:0 32px;
`
export const Label = styled.Text`
    font-size: 16px;
    font-weight: bold;
    margin-top: 16px;
    margin-bottom: 8px;
`
export const Input = styled.TextInput`
    border: 1px solid #CCC;
    width: 100%;
    height: 50px;
    border-radius: 8px;
    font-size: 16px;
    padding: 8px;
`
export const ListArea = styled.View`
    flex-direction: row;
    justify-content: space-between;
`
export const DayItem = styled.TouchableHighlight`
    width: 30px;
    height: 30px;
    border-radius:8px;
    background-color: #EEE;
    justify-content: center;
    align-items:center;
`
export const DayItemText = styled.Text``
export const LevelItem = styled.TouchableHighlight`
    height: 30px;
    border-radius:8px;
    background-color: #EEE;
    justify-content: center;
    align-items:center;
    padding: 0 8px;
`
export const LevelItemText = styled.Text``