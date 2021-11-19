import React, { useState, useEffect } from 'react'
import { View, Text, Image, Button,TouchableOpacity } from 'react-native'

const Home = () => {
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)
    const [ list, setList ] = useState(null)


    const onPress = async() => {
      const data = await fetch('http://192.168.1.31:8080/room/getList', {
        method: 'post',
        headers: {
          "Accept": 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "memberID": "User2"
        })
      }).then( res => res.json() )

      console.log( data[0])
    } 

    return (
      <View>
      </View>
      );
}

export default Home;
