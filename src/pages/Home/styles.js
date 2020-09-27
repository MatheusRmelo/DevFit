import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
    align-items: center;
`
export const ConfigButtonArea = styled.TouchableHighlight`
    width: 30px;
    height: 30px;
    justify-content: center;
    align-items: center;
`
export const ConfigButtonImage = styled.Image`
    width: 24px;
    height: 24px;
`
export const Legend = styled.View`
    width: 90%;
    align-items: flex-start;
    margin-top: 32px;
`
export const LegendText = styled.Text`
    color: #555;
`
export const LegendItem = styled.View`
    flex-direction: row;
    align-items: center;
    margin-top: 8px;
`
export const LegendBox = styled.View`
    width: 16px;
    height: 16px;
    background-color: ${props=>props.color ? props.color : '#CCC'};
    margin-right: 8px;
`
