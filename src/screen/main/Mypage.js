import axios, { Axios } from 'axios'
import React, { useState } from 'react'
import { View, Image, Button } from 'react-native'
import D_Day from '../../components/D_Day'


const Mypage = () => {
    const [ uri, setUri ] = useState()

    const unLoadImage = async () => {
        try {
            const data = await axios.get('http://192.168.1.80:8080/file/getImg/31')
            
            setUri(data.data.img)

          } catch (error) {
            console.error(error);
          }
      }

    return (
        <View>
            <Button title="123" onPress={() => unLoadImage()} />
            <Image 
                style={{ height: 250, width: 250 }}
                source={{ uri: `data:image/png;base64,${uri}` }}
            /> 
            <D_Day endDate={"2021-12-25"} /> 
        </View>
    )
}

export default Mypage
