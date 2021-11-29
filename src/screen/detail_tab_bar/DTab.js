import React from 'react'
import { View, Text } from 'react-native'
import styled from 'styled-components'
import { MainColor } from '../../components/Color'
import Tag from '../../asset/6_page/9_.svg'

const Container = styled.TouchableOpacity`
    flex: 1;
    align-items: center;
    justify-content:center;
    border-top-width: 1.5px;
    border-top-color: ${props => props.borderColor ? MainColor.Banana : 'transparent'};
    border-right-width : 1px;
    border-right-color: ${props => props.borderColor ? "#e2e2e2" : 'transparent'};
    border-left-width: 1px;
    border-left-color: ${props => props.borderColor ? "#e2e2e2" : 'transparent'};
    border-bottom-width : 1px;
    border-bottom-color: ${props => props.borderColor ? 'transparent' : "#e2e2e2"};
` 

const DTab = ({ color, tab, onPress, borderColor, number }) => {

    return (
        <Container onPress={onPress} borderColor={borderColor} number={number} >
            { borderColor ? <View style={{ position: 'absolute', top: -3, right: -2 }} ><Tag/></View>: null }
            <Text style={{ color }} >{tab.name}</Text>
        </Container>
    )
}

export default DTab 
