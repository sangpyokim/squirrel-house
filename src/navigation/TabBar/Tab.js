import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import styled from 'styled-components'
import { AntDesign } from '@expo/vector-icons'
import First from '../../asset/bottom_nav/find.svg'
import Second from '../../asset/bottom_nav/second.svg'
import Third from '../../asset/bottom_nav/4.svg'
import Tourth from '../../asset/bottom_nav/5.svg'
import {ICONSIZE} from '../../components/Size'


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
                        <First width={ICONSIZE.BOTTOM_NAV_ICON} height={ICONSIZE.BOTTOM_NAV_ICON} fill={color} opacity="0.5" /> 
                        <Text style={{ color, fontFamily: 'Noto400' }}>{tab.name}</Text>
                    </Container>
          case 1:
            return  <Container onPress={onPress}>
                        <Second width={ICONSIZE.BOTTOM_NAV_ICON} height={ICONSIZE.BOTTOM_NAV_ICON} fill={color}  /> 
                        <Text style={{ color, fontFamily: 'Noto400' }}>{tab.name}</Text>
                    </Container>
          case 2:
            return  <Container onPress={onPress}>
                        <Third width={ICONSIZE.BOTTOM_NAV_ICON} height={ICONSIZE.BOTTOM_NAV_ICON} fill={color}  /> 
                        <Text style={{ color, fontFamily: 'Noto400' }}>{tab.name}</Text>
                    </Container>
          case 3:
            return  <Container onPress={onPress}>
                        <Tourth width={ICONSIZE.BOTTOM_NAV_ICON} height={ICONSIZE.BOTTOM_NAV_ICON} fill={color}  /> 
                        <Text style={{ color, fontFamily: 'Noto400' }}>{tab.name}</Text>
                    </Container>
          default:
            return null
        }

}

export default Tab