import React from 'react'
import { Dimensions } from 'react-native'

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Ed from '../screen/maintain/ed'
import Ing from '../screen/maintain/ing'
import { MainColor } from '../components/Color';

const Tab = createMaterialTopTabNavigator();

const Width = Dimensions.get('window').width * 0.3

const MaintainNavigation = () => {
    return (
        <Tab.Navigator 
        screenOptions={{
            tabBarLabelStyle: {fontSize: 16, letterSpacing: 0.15 },
            tabBarItemStyle: { width: Width, height: 50},
            tabBarScrollEnabled: true,
            tabBarBounces: false,
            tabBarIndicatorStyle: { backgroundColor: MainColor.Banana} // 
        }}        
        >
            <Tab.Screen name="활동중" component={Ing} options={{ title: '활동중' }} />
            <Tab.Screen name="이전활동" component={Ed} options={{ title: '이전활동'}}  />
        </Tab.Navigator>
    )
}


export default MaintainNavigation
