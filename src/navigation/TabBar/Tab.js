import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import styled from 'styled-components'
import { AntDesign } from '@expo/vector-icons'
import First from '../../asset/bottomnav/find.svg'
import Second from '../../asset/bottomnav/second.svg'
import Third from '../../asset/bottomnav/4.svg'
import Tourth from '../../asset/bottomnav/5.svg'


const ICONSIZE = 25

const Container = styled.TouchableOpacity`
    flex: 1;
    align-items:center;
    justify-content:center;
    background-color: transparent;
` 

const Tab = ({ color, tab, onPress, icon }) => {

        switch (icon) {
          case 0:
            return  <Container onPress={onPress}>
                        <First width={ICONSIZE} height={ICONSIZE} fill={color} /> 
                        <Text style={{ color }}>{tab.name}</Text>
                    </Container>
          case 1:
            return  <Container onPress={onPress}>
                        <Second width={ICONSIZE} height={ICONSIZE} fill={color}  /> 
                        <Text style={{ color }}>{tab.name}</Text>
                    </Container>
          case 2:
            return  <Container onPress={onPress}>
                        <Third width={ICONSIZE} height={ICONSIZE} fill={color}  /> 
                        <Text style={{ color }}>{tab.name}</Text>
                    </Container>
          case 3:
            return  <Container onPress={onPress}>
                        <Tourth width={ICONSIZE} height={ICONSIZE} fill={color}  /> 
                        <Text style={{ color }}>{tab.name}</Text>
                    </Container>
          default:
            return null
        }

}

export default Tab