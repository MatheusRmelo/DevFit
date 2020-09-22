import { useNavigation, CommonActions } from '@react-navigation/native'
import  { useSelector } from 'react-redux'

const Preload = () => {
    const name = useSelector(state => state.userReducer.name)
    const navigation = useNavigation()

    
    navigation.dispatch(
        CommonActions.reset({
        index: 1,
        routes: [
            { name: 'Starter' },
           
        ],
        })
    );
    // if(!name){
    //     //mandar para starterStack
    //     navigation.dispatch(CommonActions.reset({
    //         index:0,
    //         routes: [
    //             { name: 'StarterStack' }
    //         ]
    //     }))
    // }else{
    //     //mandar para apptab
    //     navigation.dispatch(CommonActions.reset({
    //         index:0,
    //         routes: [
    //             { name: 'AppTab' }
    //         ]
    //     }))
    // }

    return null
}
export default Preload