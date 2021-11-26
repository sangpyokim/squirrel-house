import axios, { Axios } from 'axios'
import React, { useState } from 'react'
import { View, Image, Button } from 'react-native'
import D_Day from '../../components/D_Day'


const Mypage = () => {
    const [ uri, setUri ] = useState()

    const unLoadImage = async () => {
        try {
            const data = await axios.get('http://211.227.151.158:8080/file/getImg/7')
            
            setUri(data.data)

          } catch (error) {
            console.error(error);
          }
      }
console.log
    return (
        <View>
            <Button title="123" onPress={() => unLoadImage()} />
            <Image 
                style={{ height: 250, width: 250 }}
                source={{ uri: uri }}
                resizeMode= 'cover'
            /> 
            <D_Day endDate={"2021-12-25"} /> 
        </View>
    )
}

export default Mypage
