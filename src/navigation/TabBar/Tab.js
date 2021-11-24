import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import styled from 'styled-components'
import { AntDesign } from '@expo/vector-icons'
import First from '../../asset/bottom_nav/find.svg'
import FirstHover from '../../asset/bottom_nav/bottom nav _1_icon_group search_hover.svg'
import Second from '../../asset/bottom_nav/second.svg'
import SecondHover from '../../asset/bottom_nav/bottom nav _2_icon_hot_hover.svg'
import Third from '../../asset/bottom_nav/4.svg'
import ThirdHover from '../../asset/bottom_nav/bottom nav _4_icon_manage_hover.svg'
import Fourth from '../../asset/bottom_nav/5.svg'
import FourthHover from '../../asset/bottom_nav/bottom nav _5_icon_my_hover.svg'
import {ICONSIZE} from '../../components/Size'
import { MainColor } from '../../components/Color'


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
                    { color === MainColor.Banana 
                      ?  
                        <FirstHover width={ICONSIZE.BOTTOM_NAV_ICON} height={ICONSIZE.BOTTOM_NAV_ICON} fill={color} opacity="0.5" /> 
                      :  
                        <First width={ICONSIZE.BOTTOM_NAV_ICON} height={ICONSIZE.BOTTOM_NAV_ICON} fill={color} opacity="0.5" /> 
                    }
                        <Text style={{ color, fontFamily: 'Noto400',lineHeight: 16, marginTop: 4 }}>{tab.name}</Text>
                    </Container>
          case 1:
            return  <Container onPress={onPress}>
                      { color === MainColor.Banana 
                        ?  
                          <SecondHover width={ICONSIZE.BOTTOM_NAV_ICON} height={ICONSIZE.BOTTOM_NAV_ICON} fill={color} opacity="0.5" /> 
                        :  
                          <Second width={ICONSIZE.BOTTOM_NAV_ICON} height={ICONSIZE.BOTTOM_NAV_ICON} fill={color} opacity="0.5" /> 
                      }
                        <Text style={{ color, fontFamily: 'Noto400', lineHeight: 16, marginTop: 4 }}>{tab.name}</Text>
                    </Container>
          case 2:
            return  <Container onPress={onPress}>
                      { color === MainColor.Banana 
                              ?  
                                <ThirdHover width={ICONSIZE.BOTTOM_NAV_ICON} height={ICONSIZE.BOTTOM_NAV_ICON} fill={color} opacity="0.5" /> 
                              :  
                                <Third width={ICONSIZE.BOTTOM_NAV_ICON} height={ICONSIZE.BOTTOM_NAV_ICON} fill={color} opacity="0.5" /> 
                            }
                        <Text style={{ color, fontFamily: 'Noto400', lineHeight: 16, marginTop: 4}}>{tab.name}</Text>
                    </Container>
          case 3:
            return  <Container onPress={onPress}>
                        { color === MainColor.Banana 
                        ?  
                          <FourthHover width={ICONSIZE.BOTTOM_NAV_ICON} height={ICONSIZE.BOTTOM_NAV_ICON} fill={color} opacity="0.5" /> 
                        :  
                          <Fourth width={ICONSIZE.BOTTOM_NAV_ICON} height={ICONSIZE.BOTTOM_NAV_ICON} fill={color} opacity="0.5" /> 
                        }
                        <Text style={{ color, fontFamily: 'Noto400', lineHeight: 16, marginTop: 4 }}>{tab.name}</Text>
                    </Container>
          default:
            return null
        }

}

export default Tab