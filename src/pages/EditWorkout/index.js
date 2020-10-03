import React, { useState, useLayoutEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'

import { 
    Container,
    SaveArea,
    SaveImage,
    NameInput,
    ButtonText,
    ExercisesArea,
    ExercisesList,
    ModalLabel,
    ModalMuscles,
    ModalInput,
    ModalMuscle,
    ModalMuscleImage,
    ModalExtra,
    ModalExtraItem
 } from './styles'

//import Workout from '../../components/Workout'
import DefaultButton from '../../components/DefaultButton'
import ExerciseItemEdit from '../../components/ExerciseItemEdit'
import CustomModal from '../../components/CustomModal'

import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';


import { useSelector, useDispatch } from 'react-redux'

export default () => {
    const navigation = useNavigation()
    const route = useRoute()

    let workout = route.params?.workout ?? false
    const [id, setId] = useState(workout?workout.id:'')
    const [name, setName] = useState(workout?workout.name:'') 
    const [exercises, setExercises] = useState(workout?workout.exercises:[])
    const [modalVisible, setModalVisible] = useState(false)
    const [modalId, setModalId] = useState('')
    const [modalName, setModalName] = useState('')
    const [modalMuscle, setModalMuscle] = useState('')
    const [modalSets, setModalSets] = useState('')
    const [modalReps, setModalReps] = useState('')
    const [modalLoad, setModalLoad] = useState('')
    //let isEdit = route.params.workout ? true : false
    const myWorkouts = useSelector(state => state.users.myWorkouts)
    
    
    const dispatch = useDispatch()
    useLayoutEffect(()=>{
        const handleSave = () => {
            let newWorkout = {
                id,
                name,
                exercises
            }
            if(newWorkout){
                if(newWorkout.exercises.length > 0){
                    if(newWorkout.id !== ''){
                        dispatch({type: 'EDIT_WORKOUT', payload:{workout:newWorkout}})
                    }else{
                        newWorkout.id = uuidv4()
                        dispatch({type: 'ADD_WORKOUT', payload:{workout:newWorkout}})
                    }

                    navigation.goBack()
                } else{
                    alert('Você precisa ter pelo menos um exercício')
                    return
                }
            }
        }

        const SaveWorkoutButton = () => {
            return(
                <SaveArea onPress={handleSave} underlayColor="transparent">
                    <SaveImage source={require('../../assets/check-black.png')} />
                </SaveArea>

            )
        }


        navigation.setOptions({
            title: workout? 'Editar treino': 'Adicionar treino',
            headerTitleAlign: 'center',
            headerRight: ()=><SaveWorkoutButton />,
            headerRightContainerStyle:{
                marginRight: 8
            }
        })
        //navigation.setParams({workoutDays})
    }, [name, exercises])

    const editExercise = (exercise) => {
        setModalId(exercise.id)
        setModalName(exercise.name)
        setModalMuscle(exercise.muscle)
        setModalSets(exercise.sets)
        setModalReps(exercise.reps)
        setModalLoad(exercise.load)
        setModalVisible(true)
    }
    const delExercise =  (exercise) => {
        let newExercises = [...exercises]
        newExercises = newExercises.filter(i=>i.id !== exercise.id)
        setExercises(newExercises)
    }
    const modalSave = () => {
        let newExercises = [...exercises]

        if(modalName === '' || modalMuscle === '' || modalSets === '' || modalReps === '' ){
            alert('Preencha todas as informações')
            return
        }

        if(modalId){
            let index = newExercises.findIndex(i=>i.id===modalId)
            if( index > -1){
                newExercises[index].name = modalName
                newExercises[index].muscle = modalMuscle
                newExercises[index].sets = modalSets
                newExercises[index].reps = modalReps
                newExercises[index].load = modalLoad

            }
        }else{
            let ex = {
                id: uuidv4(),
                name: modalName,
                muscle: modalMuscle,
                sets: modalSets,
                reps: modalReps,
                load: modalLoad
            }
            newExercises.push(ex)
        }

        setExercises(newExercises)
        setModalVisible(false)
    }

    const resetModal = () => {
        setModalId('')
        setModalName('')
        setModalMuscle('')
        setModalSets('')
        setModalReps('')
        setModalLoad('')
    }

    const addExercise = () => {
        resetModal()
        setModalVisible(true)
    }

    
    
    return(
        <Container>
            <CustomModal visible={modalVisible} closeAction={()=>setModalVisible(false)}>
                <ModalLabel>Músculo de foco</ModalLabel>
                <ModalMuscles horizontal={true} showHorizontalScrollIndicator={false}>
                    <ModalMuscle opacity={modalMuscle==='abs' ? 1:0.3} onPress={()=>setModalMuscle('abs')} underlayColor="transparent">
                        <ModalMuscleImage source={require('../../assets/muscles/abs.png')} />
                    </ModalMuscle>
                    <ModalMuscle opacity={modalMuscle==='back' ? 1:0.3} onPress={()=>setModalMuscle('back')} underlayColor="transparent">
                        <ModalMuscleImage source={require('../../assets/muscles/back.png')} />
                    </ModalMuscle>
                    <ModalMuscle opacity={modalMuscle==='biceps' ? 1:0.3} onPress={()=>setModalMuscle('biceps')} underlayColor="transparent">
                        <ModalMuscleImage source={require('../../assets/muscles/biceps.png')} />
                    </ModalMuscle>
                    <ModalMuscle opacity={modalMuscle==='chest' ? 1:0.3} onPress={()=>setModalMuscle('chest')} underlayColor="transparent">
                        <ModalMuscleImage source={require('../../assets/muscles/chest.png')} />
                    </ModalMuscle>
                    <ModalMuscle opacity={modalMuscle==='gluteos' ? 1:0.3} onPress={()=>setModalMuscle('gluteos')} underlayColor="transparent">
                        <ModalMuscleImage source={require('../../assets/muscles/gluteos.png')} />
                    </ModalMuscle>
                    <ModalMuscle opacity={modalMuscle==='legs' ? 1:0.3} onPress={()=>setModalMuscle('legs')} underlayColor="transparent">
                        <ModalMuscleImage source={require('../../assets/muscles/legs.png')} />
                    </ModalMuscle>
                    <ModalMuscle opacity={modalMuscle==='shoulders' ? 1:0.3} onPress={()=>setModalMuscle('shoulders')} underlayColor="transparent">
                        <ModalMuscleImage source={require('../../assets/muscles/shoulders.png')} />
                    </ModalMuscle>
                    <ModalMuscle opacity={modalMuscle==='triceps' ? 1:0.3} onPress={()=>setModalMuscle('triceps')} underlayColor="transparent">
                        <ModalMuscleImage source={require('../../assets/muscles/triceps.png')} />
                    </ModalMuscle>
                </ModalMuscles>

                <ModalLabel>Nome do exercício</ModalLabel>
                <ModalInput value={modalName} onChangeText={e => setModalName(e)} />

                <ModalExtra>
                    <ModalExtraItem>
                        <ModalLabel>Séries</ModalLabel>
                        <ModalInput keyboardType="numeric" value={modalSets} onChangeText={e => setModalSets(e)} />
                    </ModalExtraItem>
                    <ModalExtraItem>
                        <ModalLabel>Repetições</ModalLabel>
                        <ModalInput keyboardType="numeric" value={modalReps} onChangeText={e => setModalReps(e)} />
                    </ModalExtraItem>
                    <ModalExtraItem>
                        <ModalLabel>Carga</ModalLabel>
                        <ModalInput keyboardType="numeric" value={modalLoad} onChangeText={e => setModalLoad(e)} />
                    </ModalExtraItem>
                </ModalExtra>

                <DefaultButton bgColor="#4AC34E" onPress={modalSave} underlayColor="transparent">
                    <ButtonText>SALVAR</ButtonText>
                </DefaultButton>

            </CustomModal>
            <NameInput
                value={name}
                onChangeText={e => setName(e)}
                placeholder="Digite o nome do treino"
            />
            <ExercisesArea>
                <DefaultButton bgColor="#4AC34E" onPress={addExercise} underlayColor="transparent" >
                    <ButtonText>Adicionar Exercício</ButtonText>
                </DefaultButton>
                <ExercisesList
                    data={exercises}
                    renderItem = {({item})=>(
                        <ExerciseItemEdit 
                            data={item} 
                            editAction = {()=>editExercise(item)}
                            delAction = {()=>delExercise(item)}
                        />
                    )}
                    keyExtractor={item => item.name}
                />
            </ExercisesArea>
        </Container>
    )
}