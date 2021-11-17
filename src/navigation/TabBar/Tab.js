import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import styled from 'styled-components'
import { AntDesign } from '@expo/vector-icons'

const Container = styled.TouchableOpacity`
    flex: 1;
    align-items:center;
    justify-content:center;
    background-color: transparent;
` 

const Tab = ({ color, tab, onPress, icon }) => {
    //아이콘 수정!
    return(
        <Container onPress={onPress}>
            <AntDesign name={'home'} size={22} color={color} /> 
            <Text style={{ color }} >{tab.name}</Text>
        </Container>
    )
}

export default Tab