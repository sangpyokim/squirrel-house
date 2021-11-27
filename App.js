import React, { useState, useEffect } from 'react';
import { Alert, BackHandler, SafeAreaView } from 'react-native';
import { QueryClient, QueryClientProvider } from 'react-query'
import SplashScreen from 'react-native-splash-screen';

import { Provider, useSelector } from 'react-redux'
import { store } from './src/redux/store';

import { NavigationContainer } from '@react-navigation/native'

import Logging from './src/navigation/LoggingNav';
import MainStackNav from './src/navigation/MainStackNav';

import { useFonts } from 'expo-font'

const queryClient = new QueryClient()


export default function App() {
  const [ logging , setLogging ] = useState(false) // 임시, redux로 isloggedin 상태변경해야함

  
  let [fontsLoaded] = useFonts({
    "Dream": require('./src/asset/fonts/DreamBold.ttf'),
    "Noto500": require('./src/asset/fonts/NotoSansKR-Medium.otf'),
    "Noto400": require('./src/asset/fonts/NotoSansKR-Regular.otf'),
    "Noto700": require('./src/asset/fonts/NotoSansKR-Bold.otf')
  })

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
      if( fontsLoaded === true ) {
        setLogging(true)
          SplashScreen.hide()

      }
      const backHandler = BackHandler.addEventListener("hardwareBackPress", backAction);
      return () => backHandler.remove();
  }, [fontsLoaded])
// 에셋, 폰트를 불러오면 setLogging(true) => logging === true : SplashScreen.hide() ? null


  return(
    <QueryClientProvider client={queryClient} >
    <SafeAreaView style={{ backgroundColor: 'transparent',  }} >
    </SafeAreaView>
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
    </QueryClientProvider>
  )


}