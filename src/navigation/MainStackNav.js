import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'

import MainTabBottomNav from './MainTabBottomNav';
import Writing from '../screen/main/Writing'

const Stack = createNativeStackNavigator();


const MainStackNav = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false, gestureEnabled: true }}  >
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
                    headerTitleAlign: 'center'
                }}/>    
        </Stack.Navigator>
    )
}

export default MainStackNav
