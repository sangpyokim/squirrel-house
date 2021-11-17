import React from 'react'

// navigation
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import SignIn from '../screen/login/SignIn'
import SignUp from '../screen/login/SignUp'


const Stack = createNativeStackNavigator();

const Logging = () => {

    
    return (
              <Stack.Navigator>
                  <Stack.Screen name="SignIn" component={SignIn} />
                  <Stack.Screen name="SignUp" component={SignUp} />
              </Stack.Navigator>
    )
}

export default Logging
