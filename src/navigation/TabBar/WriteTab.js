import React from 'react'
import { Dimensions, Platform } from 'react-native'
import styled from 'styled-components'
import { FontAwesome } from '@expo/vector-icons'

const width = Dimensions.get('window').width * 0.17


const Container = styled.TouchableOpacity`
    align-items:center;
    justify-content:center;
    padding: 20px;
    margin:2px;
    position:relative;
    bottom: ${Dimensions.get('window').height * 0.04}px;
    background-color: #ffffff;
    width: ${width}px;
    height: ${width}px;
    border-radius:${width * 0.5}px;
    box-shadow: 0 0 3px rgba(25, 25, 25, 0.4);
    elevation: 3;
` 

const Tab = ({ color, tab, onPress, icon  }) => {
    return(
        <Container onPress={onPress} >
            <FontAwesome name='pencil' size={28} color={'white'} />
        </Container>
    )
}

export default Tab