import React from 'react'
import styled from 'styled-components/native'

import { Text } from 'react-native'

import { useNavigation } from '@react-navigation/native'

const TabBarArea = styled.SafeAreaView`
    flex-direction: row;
    background-color:#EEE;
`
const TabBarItem = styled.View`
    flex:1;
    height: 65px;
    align-items: center;
`
const TabRegular = styled.TouchableHighlight`
    align-items: center;
`
const TabImage = styled.Image`
    width:25px;
    height: 25px;
    margin-top: 12px;
    margin-bottom: 8px;
`
const TabBall = styled.TouchableHighlight`
    width: 100px;
    height: 100px;
    background-color: #3BA237;
    border-radius: 50px;
    justify-content: center;
    align-items: center;
    border: 5px solid white;
    margin-top: -48px;
`
const TabBallImage = styled.Image`
    width: 40px;
    height: 40px;      
`


export default (props) => {
    const navigation = useNavigation()

    return(
        <TabBarArea>
            {props.items.map(item=>(
                <TabBarItem key={item.route}>
                    {item.type === 'regular' &&
                        <TabRegular underlayColor='transparent' onPress={()=>navigation.navigate(item.route)}>
                            <>
                                <TabImage source={item.icon} />
                                <Text>{item.text}</Text>
                            </>
                        </TabRegular>
                    }
                    {item.type === 'big' &&
                        <TabBall underlayColor='green' onPress={()=>navigation.navigate(item.route)}>
                            <TabBallImage source={item.icon} />
                        </TabBall>
                    } 
                </TabBarItem>
            ))}
        </TabBarArea>
    )
}