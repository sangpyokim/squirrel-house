import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'

import MainTabBottomNav from './MainTabBottomNav';
import Writing from '../screen/main/Writing'
import { SafeAreaView } from 'react-native';
import Detail from '../screen/Detail';
import { AntDesign } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();


const MainStackNav = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false, gestureEnabled: true, headerStyle: {height: 56} }}  >
            <Stack.Screen 
                name="MainTabBottomNav" 
                component={MainTabBottomNav} />
            <Stack.Screen 
                name="모임만들기" 
                component={Writing} 
                options={{
                    headerBackVisible:false,
                    headerShown: true, 
                    headerTintColor: 'black',
                    presentation: 'card',
                    headerTransparent: false,
                    headerBackTitleVisible: false,                           
                    headerTitleAlign: 'center',
                    headerTitleStyle:{fontFamily: 'Dream', fontSize: 20, },
                }}/>
            <Stack.Screen 
                name="Detail"
                component={Detail}
                options={{
                    headerShown: false,
                    presentation: 'card',   
                }}
            />
        </Stack.Navigator>
    )
}

export default MainStackNav
