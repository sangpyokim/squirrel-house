import React from 'react'
import { Dimensions } from 'react-native'
import styled from 'styled-components'
import TextSvg from '../../asset/bottom_nav/writing.svg'
import { MainColor } from '../../components/Color'

const width = Dimensions.get('window').width * 0.17


const Container = styled.TouchableOpacity`
    align-items:center;
    justify-content:center;
    padding: 20px;
    margin:2px;
    position:relative;
    bottom: ${Dimensions.get('window').height * 0.04}px;
    background-color: ${MainColor.Banana};
    width: ${width}px;
    height: ${width}px;
    border-radius:${width * 0.5}px;
    elevation: 3;
` 

const Tab = ({ color, tab, onPress, icon  }) => {
    return(
        <Container onPress={onPress}  >
            <TextSvg width={24} height={24} fill="white" /> 
        </Container>
    )
}

export default Tab