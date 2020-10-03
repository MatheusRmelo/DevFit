import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
    flex:1;
    margin:32px;
`
export const SaveArea = styled.TouchableHighlight`
    width: 30px;
    height: 30px;
    align-items: center;
    justify-content: center;
`
export const SaveImage = styled.Image`
    width: 25px;
    height: 25px;
`
export const NameInput = styled.TextInput`
    border:1px solid #CCC;
    width: 100%;
    height: 50px;
    border-radius: 8px;
    font-size: 12px;
    padding: 8px;
`
export const ButtonText = styled.Text`
    color: white;
`
export const ExercisesArea = styled.View`
    flex: 1;
    margin-top: 16px;
    padding-top:16px;
    border-top-width: 1px;
    border-top-color: #CCC;
`
export const ExercisesList = styled.FlatList`
    flex:1;
    padding-top: 16px;
`
export const ModalLabel = styled.Text`
    font-size: 12px;
    font-weight: bold;
    margin-top: 8px;
`
export const ModalMuscles = styled.ScrollView``
export const ModalInput = styled.TextInput`
    width: 100%;
    font-size:12px;
    color:#333;
    height: 40px;
    border-bottom-width: 1px;
    border-bottom-color: #CCC;
`
export const ModalMuscle = styled.TouchableHighlight`
    width: 50px;
    height: 50px;
    background-color:#EEE;
    border-radius: 8px;
    justify-content: center;
    align-items: center;
    margin-right: 8px;
    opacity:${props=>props.opacity};
`
export const ModalMuscleImage = styled.Image`
    width:35px;
    height:35px;
`
export const ModalExtra = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 16px;
`
export const ModalExtraItem = styled.View`
    align-items:center;
`
