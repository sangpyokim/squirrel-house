import React from 'react'
import { Dimensions } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

//screen
import Home from '../screen/main/maintop/Home'
import Picture from '../screen/main/maintop/Picture'
import Game from '../screen/main/maintop/Game'
import Sports from '../screen/main/maintop/Sports'
import Study from '../screen/main/maintop/Study'
import Meal from '../screen/main/maintop/Meal'
import Etc from '../screen/main/maintop/Etc'
import { MainColor } from '../components/Color';



const Tab = createMaterialTopTabNavigator();

const Width = Dimensions.get('window').width * 0.3

const MainTopNavigation = () => {
    return (
        <Tab.Navigator 
        screenOptions={{
            tabBarLabelStyle: {fontSize: 16, letterSpacing: 0.15, fontFamily: 'Noto500' },
            tabBarItemStyle: { width: Width, height: 50},
            tabBarScrollEnabled: true,
            tabBarBounces: false,
            tabBarIndicatorStyle: { backgroundColor: MainColor.Banana}
        }}        
        >
            <Tab.Screen name="AllBoard" component={Home} options={{title: '전체'}} />
            <Tab.Screen name="Picture" component={Picture} options={{title: '사진/영상'}}  />
            <Tab.Screen name="Game" component={Game} options={{title: '게임/오락'}}  />
            <Tab.Screen name="Sports" component={Sports} options={{title: '운동/스포츠'}}  />
            <Tab.Screen name="Study" component={Study} options={{title: '공부/스터디'}}  />
            <Tab.Screen name="Meal" component={Meal} options={{title: '식사/술'}}  />
            <Tab.Screen name="Etc" component={Etc} options={{title: '기타'}}  />
        </Tab.Navigator>
    )
}

export default MainTopNavigation
