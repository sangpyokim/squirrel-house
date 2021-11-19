import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'

import MainTabBottomNav from './MainTabBottomNav';
import Writing from '../screen/main/Writing'
import { SafeAreaView } from 'react-native';

const Stack = createNativeStackNavigator();


const MainStackNav = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false, gestureEnabled: true, headerStyle: {height: 56} }}  >
            <Stack.Screen 
                name="MainTabBottomNav" 
                component={MainTabBottomNav} />
            <Stack.Screen 
                name="Writing" 
                component={Writing} 
                options={{
                    headerShown: true, 
                    headerTintColor: 'black',
                    headerTitle: '모임 만들기',
                    presentation: 'card',
                    headerTransparent: false,
                    headerBackTitleVisible: false,                           
                    headerTitleAlign: 'center',
                    headerTitleStyle:{fontFamily: 'Dream', fontSize: 20},
                }}/>    
        </Stack.Navigator>
    )
}

export default MainStackNav
