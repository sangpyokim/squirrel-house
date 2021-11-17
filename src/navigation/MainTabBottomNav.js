import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import MaintainNavigation from './MaintainNavigation'
import { View, TouchableOpacity } from 'react-native'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'; 


import TabBar from './TabBar/TabBar'

//screen
import MainTopNavigation from './MainTabTopNav';
import HotGroup from '../screen/main/HotGroup'
import Fake from '../screen/main/Fake'
import Mypage from '../screen/main/Mypage'

const Tab = createBottomTabNavigator()

const MainTabBottomNav = () => {
        return(
            <Tab.Navigator  
                screenOptions={{
                    headerRight: () => (<View style={{ flexDirection: 'row', alignItems: 'center' }} >
                    <TouchableOpacity 
                        style={{ marginRight: 20, }} 
                        onPress={null}//새로 고침 
                        >
                        <MaterialCommunityIcons name="magnify" size={26} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity 
                    style={{ marginRight: 10, }} 
                    onPress={null}//새로 고침 
                    >
                    <Ionicons name="alarm" size={24} color="black" />
                </TouchableOpacity>
                    </View>),
                    title: '다람집',
                    headerTitleAlign: 'center',
                    headerTitleStyle: { 
                        color: "#aad", 
                        fontSize: 22, 
                        fontWeight: '800' 
                    }  }} tabBar={ props => <TabBar {...props} />} 
                    >
                <Tab.Screen name="모임찾기" component={MainTopNavigation} options={{ tabBarStyle:{ elevation: 3} }} />
                <Tab.Screen name="모집임박" component={HotGroup} />
                <Tab.Screen name="Fake" component={Fake} />
                <Tab.Screen name="내모임관리" component={MaintainNavigation} />
                <Tab.Screen name="마이페이지" component={Mypage} />
            </Tab.Navigator>
        )
}

export default MainTabBottomNav
