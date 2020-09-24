const initialState = {
    name:'',
    level: '',//beginner, intermediate, advanced
    workoutDays:[],//0-6 ( Semana começa no domingo )
    myWorkouts: [],
    lastWorkout: '',//ID
    dailyProgress:['2020-09-21', '2020-09-20']
}

export default (state = initialState, action)=>{
    switch(action.type){
        case 'SET_NAME':
            return {...state,name:action.payload.name}
        break
        case 'SET_WORKOUTDAYS':
            return {...state,workoutDays:action.payload.workoutDays}
        break
    }

    return state
}