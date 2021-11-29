import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import Info from '../screen/detail/Info'
import Board from '../screen/detail/Board'
import ChatRoom from '../screen/detail/ChatRoom'
import { MainColor } from '../components/Color'
import styled from 'styled-components'

import DTabBar from './detail_tab_bar/DTabBar'
const Tab = createMaterialTopTabNavigator();



const Detail = ({navigation, route}) => {
    const [ image, setImage ] = useState()
    
    const {room} = route.params

    const getAllLists = async(room) => {
        const data = await axios.get(`http://3.35.235.33:8080/file/getImg/${room}`)
        setImage(data.data)
    }
    
    useEffect(() => {
        getAllLists(room.id)
    }, [])

    return (
        <Tab.Navigator 
            tabBar={ (props) => (
                <DTabBar  {...props} room={room} image={image} />
            )}
        >
            <Tab.Screen name="정보" component={Info} />
            <Tab.Screen name="게시판" component={Board} />
            <Tab.Screen name="채팅방" component={ChatRoom} />
        </Tab.Navigator>
    )
}

export default Detail
