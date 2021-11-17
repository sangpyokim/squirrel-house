import React, { useState, useEffect } from 'react';
import { Alert, BackHandler } from 'react-native';
import SplashScreen from 'react-native-splash-screen';

import { NavigationContainer } from '@react-navigation/native'

import Logging from './src/navigation/LoggingNav';
import MainStackNav from './src/navigation/MainStackNav';

export default function App() {
  const [ logging , setLogging ] = useState(true)

  const backAction = () => {
      Alert.alert("종료하기", "앱을 종료하시겠습니까?", [
        {
          text: "취소",
          onPress: () => null,
        },
        { text: "확인", onPress: () => BackHandler.exitApp() }
      ]);
      return true;
    };
  
  useEffect( () => {
    
      setTimeout( () => {
        SplashScreen.hide()
      }, 3000)

      const backHandler = BackHandler.addEventListener("hardwareBackPress", backAction);
      return () => backHandler.remove();


  }, [])

  return(
    <NavigationContainer>
      {logging
        ?
          <MainStackNav />
        :
        <Logging />
      }
    </NavigationContainer>
  )


}
