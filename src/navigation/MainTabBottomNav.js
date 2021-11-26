import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import MaintainNavigation from './MaintainNavigation'
import { View, TouchableOpacity } from 'react-native'

import { ICONSIZE } from '../components/Size';

import TabBar from './TabBar/TabBar'

//screen
import MainTopNavigation from './MainTabTopNav';
import HotGroup from '../screen/main/HotGroup'
import Fake from '../screen/main/Fake'
import Mypage from '../screen/main/Mypage';
//icon
import Search from '../asset/common/header_icon/header_icon_search.svg'
import Bell from '../asset/common/header_icon/header_icon_bell.svg'
import { MainColor } from '../components/Color';


const Tab = createBottomTabNavigator()

const MainTabBottomNav = () => {
        return(
            <Tab.Navigator  
                screenOptions={{
                    headerRight: () => (<View style={{ flexDirection: 'row', alignItems: 'center' }} >
                    <TouchableOpacity 
                        style={{ width:48, height:48, alignItems:'center', justifyContent: 'center' }} 
                        onPress={null}//새로 고침 
                        >
                        <Search width={ICONSIZE.BOTTOM_NAV_HEADER_ICON} height={ICONSIZE.BOTTOM_NAV_HEADER_ICON} fill={MainColor.BLACK38} />
                    </TouchableOpacity>
                    <TouchableOpacity 
                    style={{ marginRight: 10, width:48, height:48, alignItems:'center', justifyContent: 'center'  }} 
                    onPress={null}//새로 고침 
                    >
                    <Bell width={ICONSIZE.BOTTOM_NAV_HEADER_ICON} height={ICONSIZE.BOTTOM_NAV_HEADER_ICON} fill={MainColor.BLACK38} />
                </TouchableOpacity>

                    </View>),
                    title: '다람집',
                    headerTitleAlign: 'center',
                    headerStyle:{
                        height:56,
                        
                    },
                    headerTitleStyle: { 
                        fontFamily: 'Dream',
                        color: 'black', 
                        fontSize: 20, 
                    }  }} 
                    tabBar={ props => <TabBar {...props} />} 
                    >
                <Tab.Screen name="모임찾기" component={MainTopNavigation} options={{ tabBarStyle:{ elevation: 3} }} />
                <Tab.Screen name="모집임박" component={HotGroup} 
                    options={{ 
                        headerRight: null,
                        headerTitle:'모집임박',
                        headerTitleStyle:{ color: MainColor.BLACK, fontFamily: 'Dream',   },
                        headerStyle: { backgroundColor: MainColor.Banana, height: 56 } }} />
                <Tab.Screen name="Fake" component={Fake} />
                <Tab.Screen name="내모임관리" component={MaintainNavigation} />
                <Tab.Screen name="마이페이지" component={Mypage} />
            </Tab.Navigator>
        )
}

export default MainTabBottomNav