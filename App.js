import React, { useState, useEffect } from 'react';
import { Alert, BackHandler } from 'react-native';
import SplashScreen from 'react-native-splash-screen';

import { Provider } from 'react-redux'
import { store } from './src/redux/store';

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
      // 불러와야할 에셋, api들을 불러옴
      // loaded === true && 저장된 유저정보 === true, 유저정보 리덕스에 저장되면 메인페이지로 이동 그렇지않으면 로그인페이지
      setTimeout( () => {
        SplashScreen.hide()
      }, 3000)

      const backHandler = BackHandler.addEventListener("hardwareBackPress", backAction);
      return () => backHandler.remove();


  }, [])

  return(
    <Provider store={store} >
    <NavigationContainer>
      {logging
        ?
          <MainStackNav />
        :
          <Logging />
      }
    </NavigationContainer>
    </Provider>
  )


}
